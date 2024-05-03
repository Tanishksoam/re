export namespace FeedbackApplicationEvent {
  export namespace FeedbackCreated {
    export const key = 'feedback.application.feedback.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
