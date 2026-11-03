const fs = require('fs');
const vm = require('vm');

function checkFile(file) {
  try {
    const code = fs.readFileSync(file, 'utf8');
    const ctx = { window: {} };
    vm.runInNewContext(code, ctx);
    // Check for EXAM_DATA, EXAM_DATA_TOPIC2..10, EXAM_DATA_THACSI1, or EXAM_DATA_THACSI2
    const examData = ctx.EXAM_DATA || 
      ctx.EXAM_DATA_TOPIC2 || ctx.EXAM_DATA_TOPIC3 || ctx.EXAM_DATA_TOPIC4 || 
      ctx.EXAM_DATA_TOPIC5 || ctx.EXAM_DATA_TOPIC6 || ctx.EXAM_DATA_TOPIC7 || 
      ctx.EXAM_DATA_TOPIC8 || ctx.EXAM_DATA_TOPIC9 || ctx.EXAM_DATA_TOPIC10 || 
      ctx.EXAM_DATA_THACSI1 || ctx.EXAM_DATA_THACSI2 || 
      ctx.window.EXAM_DATA || ctx.window.EXAM_DATA_TOP1 || ctx.window.EXAM_DATA_TOPIC1 || 
      ctx.window.EXAM_DATA_TOPIC2 || ctx.window.EXAM_DATA_TOPIC3 || ctx.window.EXAM_DATA_TOPIC4 || 
      ctx.window.EXAM_DATA_TOPIC5 || ctx.window.EXAM_DATA_TOPIC6 || ctx.window.EXAM_DATA_TOPIC7 || 
      ctx.window.EXAM_DATA_TOPIC8 || ctx.window.EXAM_DATA_TOPIC9 || ctx.window.EXAM_DATA_TOPIC10 || 
      ctx.window.EXAM_DATA_THACSI1 || ctx.window.EXAM_DATA_THACSI2;
      
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
checkFile('data_topic3.js');
checkFile('data_topic4.js');
checkFile('data_topic5.js');
checkFile('data_topic6.js');
checkFile('data_topic7.js');
checkFile('data_topic8.js');
checkFile('data_topic9.js');
checkFile('data_topic10.js');
checkFile('data_thacsi1.js');
checkFile('data_thacsi2.js');
