import { defineStore } from "pinia";
import { ITestimonial } from "~/interface";

export const useTestimonialStore = defineStore('testimonial', {
	state: () => ({
		testimonials: [
			{
				name: "Sam Ryan",
				text: "Sunt officia culpa deserunt ipsum sit officia dolore. Aute eiusmod id voluptate anim deserunt deserunt ipsum ad quis adipisicing nostrud. Minim in cillum labore eiusmod."
			},
			{
				name: "Mark Greenberg",
				text: "Reprehenderit ea velit dolor ipsum irure sint sint elit incididunt minim et excepteur velit. Ullamco ad incididunt voluptate dolor cupidatat ullamco et cillum reprehenderit irure anim amet. Officia adipisicing tempor tempor dolore ad esse qui tempor aliqua voluptate sint. Do nulla dolore exercitation cillum est excepteur. Velit eiusmod aliqua qui nulla enim cillum irure labore. Do amet eu irure elit consectetur deserunt eu cillum sunt sit aute reprehenderit nostrud. Ex laborum cupidatat sint do nisi aliquip nisi."
			},
			{
				name: "Tom Jackson",
				text: "Duis proident aliqua voluptate sunt sunt. Exercitation ex veniam elit elit proident Lorem. Culpa proident ea in magna ipsum sint. Consectetur qui deserunt Lorem nulla magna aute reprehenderit nulla non culpa tempor veniam. Fugiat sint cillum reprehenderit cupidatat dolor elit enim ullamco eu cillum mollit non occaecat. Excepteur sunt aliqua laboris pariatur velit ut officia est. Ea duis esse ea fugiat sit mollit eu culpa dolor nostrud velit ea.a"
			}] as ITestimonial[],
		currentIndex: 0,
	}),
	actions: {
		getCurrentTestimonial(): ITestimonial {
			return this.testimonials[this.currentIndex];
		},
		getNextTestimonial(): ITestimonial {
			return this.currentIndex + 1 < this.testimonials.length 
				? this.testimonials[this.currentIndex + 1]
				: this.testimonials[0];
		},
		getPreviousTestimonial(): ITestimonial {
			return this.currentIndex - 1 >= 0
				? this.testimonials[this.currentIndex - 1]
				: this.testimonials[this.testimonials.length - 1]
		},
		setNextTestimonial() {
			this.currentIndex + 1 < this.testimonials.length 
				? this.currentIndex = this.currentIndex + 1
				: this.currentIndex = 0;
		},
		setPreviousTestimonial() {
			this.currentIndex - 1 >= 0
				? this.currentIndex = this.currentIndex - 1
				: this.currentIndex = this.testimonials.length - 1;
		}
		
	}
})