import {UAPI} from '@byu-oit/uapi-ts/index'

export interface Message {
  metadata: UAPI.SimpleMetadata
  id: UAPI.Value & { key: true; api_type: 'system' }
  to: UAPI.ValueArray<{ api_type: 'read-only' }>
  cc: UAPI.ValueArray<{ api_type: 'read-only' }>
  bcc: UAPI.ValueArray<{ api_type: 'read-only' }>
  from: UAPI.Value & { api_type: 'system' }
  subject: UAPI.Value & { api_type: 'read-only' }
  body: UAPI.Value & { api_type: 'read-only' }
  status: UAPI.Value & { api_type: 'system' }
  status_datetime: UAPI.Value & { api_type: 'system' }
  status_by_id: UAPI.Value & { api_type: 'system' }
}

export interface Messages {
  links: {
    emails__info?: UAPI.Link
    emails__first?: UAPI.Link
    emails__next?: UAPI.Link
    emails__last?: UAPI.Link
    emails__create?: UAPI.Link
    emails__prev?: UAPI.Link
  }
  metadata: UAPI.CollectionMetadata
  values: Message[]
}