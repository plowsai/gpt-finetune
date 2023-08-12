#Warning this is not guranteed to work 100%, if you have a large dataset and want to use OpenAI to finish your the completion portion of your prompt. Run this file.

import json
import openai

openai.api_key = ''  # replace 'your-api-key' with your actual OpenAI key

# Read JSONL file
with open('your-model-here', 'r') as json_file:
    json_list = list(json_file)

# New file to write to
with open('your-model-here', 'w') as outfile:
    for json_str in json_list:
        # parse json
        result = json.loads(json_str)

        # get prompt
        prompt = result['prompt']

        # Call the OpenAI API
        response = openai.Completion.create(
            engine="text-davinci-003", 
            prompt=prompt,
            max_tokens=100)

        # Get the completion text
        completion_text = response.choices[0].text.strip()

        # write new json item
        new_item = {'prompt': prompt, 'completion': completion_text}

        # dump json item into file
        outfile.write(json.dumps(new_item) + "\n")
