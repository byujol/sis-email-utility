import Ajv from 'ajv'
import {SNSEvent} from 'aws-lambda'
import {SNSEventMessage} from '../types'
import * as schema from './schema.json'

const ajv = new Ajv()
const validate = ajv.compile(schema)

export async function emailNotification (event: SNSEvent): Promise<SNSEventMessage> {
  const data = JSON.parse(event.Records[0].Sns.Message)
  const valid = validate(data)
  if (!valid) throw new Error(`Validation Errors: ${JSON.stringify(validate.errors, null, 2)}`)
  return data as SNSEventMessage
}
