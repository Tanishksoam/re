export namespace CommunicationApplicationEvent {
  export namespace CommunicationCreated {
    export const key = 'communication.application.communication.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
