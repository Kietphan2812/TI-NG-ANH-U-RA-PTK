const fs = require('fs');
const vm = require('vm');

function checkFile(file) {
  try {
    const code = fs.readFileSync(file, 'utf8');
    const ctx = { window: {} };
    vm.runInNewContext(code, ctx);
    // Check for EXAM_DATA or EXAM_DATA_TOPIC2 in the context or window
    const examData = ctx.EXAM_DATA || ctx.EXAM_DATA_TOPIC2 || ctx.window.EXAM_DATA_TOPIC1 || ctx.window.EXAM_DATA_TOPIC2;
    if (examData) {
      console.log(`${file}: OK - topicId="${examData.topicId}", vocab=${examData.vocabulary ? examData.vocabulary.length : 'N/A'}, vocabQ=${examData.vocabularyQuestions ? examData.vocabularyQuestions.length : 'N/A'}, readingSignQ=${examData.readingSignQuestions ? examData.readingSignQuestions.length : 'N/A'}, readingTonyQ=${examData.readingTonyQuestions ? examData.readingTonyQuestions.length : 'N/A'}, readingAnnaQ=${examData.readingAnnaQuestions ? examData.readingAnnaQuestions.length : 'N/A'}, sentTrans=${examData.sentenceTransformations ? examData.sentenceTransformations.length : 'N/A'}, listeningA=${examData.listeningPartA ? examData.listeningPartA.length : 'N/A'}, listeningB=${examData.listeningPartB ? 'yes' : 'NO'}, letter=${examData.letterWriting ? 'yes' : 'NO'}, speaking=${examData.speakingCard ? 'yes' : 'NO'}`);
    } else {
      console.log(`${file}: Ran OK but no EXAM_DATA found. ctx keys:`, Object.keys(ctx));
    }
  } catch(e) {
    console.error(`${file}: ERROR - ${e.message}`);
  }
}

checkFile('data.js');
checkFile('data_topic2.js');
