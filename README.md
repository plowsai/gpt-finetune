# GPT Finetuning

Clean your data using python and fine-tune GPT using node.js


## Using your Own Data 

If you want to use your own data replace sample.jsonl with your file.

## Clean your Data 

Run your data through the python scripts inside of the data folder 

## Prepare your data for OpenAI fine-tuning 

```
openai tools fine_tunes.prepare_data -f <LOCAL_FILE>
```
After you prepare your data you will pass this into the file ```finetune.js```

## Fine Tuning 

Inside of ```finetune.js``` each step is labeled and commented out. You will uncomment out each commented section as you go through the fine-tuning process
