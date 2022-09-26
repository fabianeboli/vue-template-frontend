import { defineStore } from 'pinia';
import { IService } from '~/interface';

export const useServiceForm = defineStore('serviceForm', {
  state: () => ({
    serviceId: -1,
    visitDate: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  }) as IService,
  actions: {
    setVisitDate(visitDate: Date) {
      this.visitDate = visitDate;
    },
    setVisitId(newId: number): void {
      this.serviceId = newId;
    },
    setFirstName(firstName: string): void {
      this.firstName = firstName;
    },
    setLastName(lastName: string): void {
      this.lastName = lastName;
    },
    setEmail(email: string): void {
      this.email = email;
    },
    setPhoneNumber(phoneNumber: string): void {
      this.phoneNumber = phoneNumber;
    }
  }
});
