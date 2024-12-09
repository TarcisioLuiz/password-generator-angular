import { PasswordResource } from "./resource/password.resource"

export class Password {
  password: string
  creationDate: Date

  constructor(resource: PasswordResource) {
    this.password = resource.password
    this.creationDate = new Date(resource.creationDate)
  }
}
