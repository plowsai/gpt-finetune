const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


// First Step
// async function uploadFile() {
//     try {
//         const f = await openai.createFile(
//             fs.createReadStream("output.jsonl"),
//             "fine-tune"
//         );
//         console.log(`File ID ${f.data.id}`);
//         return f.data.id;
//     }
//     catch (err) {
//         console.log('err uploadfile: ', err);
//     } 
// }
// uploadFile();

//Second Step
// async function makeFineTune() {
//     try {
//         const ft = await openai.createFineTune({
//             training_file: 'file-oN8z4THXkra3F50qKQyXOeFe',
//             model: 'davinci'
//         });
//         console.log(ft.data);
//      }
//     catch (err) {
//         console.log('err makefinetune: ', err.response.data.error);
//     }
// }
// makeFineTune();

//Third Step
// async function getFineTunedModelName() {
//     try {
//         const modelName = await openai.listFineTunes();
//         console.table(modelName.data.data, ["id", "status", "fine_tuned_model"]);

//     }
//     catch (err) {
//         console.log('err getmod: ', err)
//     }
//  }
 
// getFineTunedModelName();

//Fourth Step
// async function run() {
//     try {
//         const comp = await openai.createCompletion({
//             model: 'your-model-here',
//             prompt: `I am feeling lonely right now and don't know what to do?`, //replace this prompt according to your data
//             max_tokens: 230,
//             top_p: 1,
//             frequency_penalty: 0.9,
//             presence_penalty: 0.9,
//         });
//         if (comp.data) {
//             console.log('choices: ', comp.data.choices)
//         }
//     } catch (err) {
//         console.log('err: ', err)
//     }
// }
// run();
