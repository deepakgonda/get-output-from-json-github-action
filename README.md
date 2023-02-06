# Get Output From JSON Github action

This action takes json as input string and property path and returns value at property path

## Inputs

### `json-string`

**Required** Json string which needs to be parsed. Must be valid JSON. Default `"{}"`.

### `property-path`

**Required** Property path whose value needs to be found out. Must be valid path in json. '.' can be used to query nested object properties. Default `"."`.

## Outputs

### `property-value`

Property value which you will get as output.

## Example usage

```yaml
uses: deepakgonda/get-output-from-json-github-action@master
with:
  json-string: '{"name": "Tom", "age": "20"}'
  property-path: 'name'
```