export namespace ContractApplicationEvent {
  export namespace ContractCreated {
    export const key = 'contract.application.contract.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
