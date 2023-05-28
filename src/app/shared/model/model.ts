export interface Model {
    subscription: string,
    cost: string,
    time: string,
    popularity?: string,
    benefits: {
      space: string,
      bandwidth: string,
      websites: string,
      customization: string,
      integration: string,
      support: string
    }
}
