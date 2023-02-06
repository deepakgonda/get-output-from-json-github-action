const core = require('@actions/core');
const github = require('@actions/github');

try {
    const propertyPath = core.getInput('property-path');
    console.log(`Property Path: ${propertyPath}`);

    const jsonString = core.getInput('json-string');
    console.log(`jsonString: ${jsonString}`);

    let output;
    const parsedJson = JSON.parse(jsonString);
    if (propertyPath == '.') {
        output = JSON.stringify(parsedJson);
    } else {
        pathsArr = propertyPath.split(".");
        let jsObj = parsedJson;
        for (prop of pathsArr) {
            jsObj = jsObj[prop];
            // console.log(`For Property: ${prop}, value:`, jsObj);
        }
        output = JSON.stringify(jsObj);
    }
    console.log('Final Output:', output);
    core.setOutput("property-value", output);

    // Get the JSON webhook payload for the event that triggered the workflow
    //   const payload = JSON.stringify(github.context.payload, undefined, 2)
    //   console.log(`The event payload: ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}