const db = require('../db-connection');
const fileNames = require("../fileNames.json");

const controllers = {
    get: (req, res) => {
        res.send('your route is working!');
    },
    getTypes: (req, res) => {
        const sql = `SELECT t.testId, t.title, t.duration,COUNT(t.title) As questions 
                    FROM test as t
                        LEFT JOIN situation as s on t.testId = s.testId
                        LEFT JOIN question as q on s.situationId = q.situationId GROUP BY t.title`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }

            res.json(rows);
        });
    },
    // First response for the beginning.
    getFreeTest: (req, res) => {
        const sql = `
                    SELECT t.title, s.image, s.audio, s.text, q.audio as qaudio, q.text as qtext  
                    FROM test as t
                        LEFT JOIN situation as s on t.testId = s.testId
                        LEFT JOIN question as q on s.situationId = q.situationId
						WHERE t.title = 'equipment'
					`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }

            res.json(rows);
        });
    },
    getFileNames: (req, res) => {
        try {
            // respond with the return value if there was no error
            res.json(fileNames);
        } catch (err) {
            // respond with 500 if there was an error
            res.status(500).send(`${err.name}: ${err.message}`);
        }
    },
    //------------------------------------------------

    //http://localhost:5000/api/tests/'equipment'
    getTest: (req, res) => {
        const testName = req.params.testName;
        const sql = `
					SELECT s.image 
					FROM test t
          			LEFT JOIN situation s
          				on t.testId = s.testId
					WHERE t.title = ${testName}
					`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json(rows);
        });
    },
    //----------------------------------------------------
    // http://localhost:5000/api/tests/'equipment'/5

    // respond:
    /* [
    	{
    		"duration": "25",
    		"situation": "What are the rules about the brakes?",
    		"image": "image-5",
    		"situationAudio": "audio-5"
    	}
    ] */
    getSituation: (req, res) => {
        const testName = req.params.testName;
        const situation = req.params.situation;
        const sql = `SELECT t.duration , s.text as 'situation', s.image, s.audio as 'situationAudio' FROM situation s
                  LEFT JOIN test t
                  on t.testId = s.testId
                  WHERE t.title = ${testName} AND s.sequence = ${situation}`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json(rows);
        });
    },
    //---------------------------------------------
    // http://localhost:5000/api/tests/question/'equipment'/5
    // respond
    /* 	[
    	{
    		"text": "No",
    		"audio": "Audio-16",
    		"explanation": null
    	},
    	{
    		"text": "Yes",
    		"audio": "Audio-17",
    		"explanation": null
    	},
    	{
    		"text": "No",
    		"audio": "Audio-18",
    		"explanation": null
    	},
    	{
    		"text": "Yes",
    		"audio": "Audio-19",
    		"explanation": null
    	}
    ] */
    getQuestion: (req, res) => {
        const testName = req.params.testName;
        const situation = req.params.situation;
        const sql = `SELECT q.questionId , q.text as text , q.audio , q.explanation , o.text as answer FROM question q
                LEFT JOIN situation s
                on q.situationId = s.situationId
                LEFT JOIN test t
                on t.testId = s.testId
                LEFT JOIN option o
                on o.optionId = q.correctOption
                WHERE t.title = ${testName} AND s.sequence = ${situation}
                ORDER by q.questionId ASC`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.json(rows);
        });
    },
    //------------------------------------------------
    // http://localhost:5000/api/tests/result/'equipment'
    // post body
    // {
    // 	"userAnswer" : [
    // 		{ "situationId": 4, "answer": 1 },
    // 		{ "situationId": 4, "answer": 1 },
    // 		{ "situationId": 4, "answer": 1 }
    // 	]
    // }

    getAnswer: (req, res) => {
        debugger;
        const testName = req.params.testName;
        const userAnswers = req.body.userAnswer;
        const sql = `SELECT q.correctOption, q.questionId as questionId , s.situationId FROM question q
                LEFT JOIN situation s
                on s.situationId = q.situationId
                LEFT JOIN test t
                on t.testId = s.testId
                WHERE t.title = ${testName}
                order by q.questionId ASC`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }

            situations = [];
            rows.forEach((el) => (
                situations.includes(el.situationId) ? situations : situations.push(el.situationId)
            ));

            //find the question number in the test
            let testLength = situations.length;

            const result = Array(testLength).fill(null);

            for (let i = 0; i < testLength; i++) {
                // 	// find each situation
                let isCorr = true;
                let situation = rows.filter((question) => Number(question.situationId) === situations[i]);

                // 	// find user answer for this situation
                let user_answer = userAnswers.filter((answer) => Number(answer.situationId) === situations[i]);

                if (user_answer.length === situation.length) {
                    for (let j = 0; j < situation.length; j++) {
                        (situation[j].correctOption === user_answer[j].answer) ? isCorr = isCorr && true: isCorr = false;
                    }
                } else {
                    isCorr = false;
                }
                result[i] = { "result": isCorr, "situationNumber": situations[i] };
            }
            res.json(result);
        });
    }
};

module.exports = controllers;