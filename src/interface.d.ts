export interface ICard {
  image: string
  heading: string
}

export interface IDescription {
  heading: string,
  image: string,
  text: string
}

export interface ITestimonial {
  name: string,
  text: string
}

export interface IPlans {
  heading: string,
  price: string,
  points: string[],
}

export interface IRecipe {
  image: string,
  name: string,
  description: string
}

export interface IBlog {
  id: number,
  image: {
    data: {
      attributes: IImage
    }
  },
  heading: string,
  date: string,
  text: string,
}


export interface IService {
  serviceId: number,
  visitDate: Date | null,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
}

export interface IResponse {
  isSuccessful: boolean,
  message: string,
  data?: IData | IData[]
}

export interface IData {
  id: string,
  attributes: (IBlog & IService) & IMeta
}

export interface IMeta {
  locale: string;
  publishedAt: string;
}

export interface IImage {
  name: string;
  formats: {
    large: IFormat;
    medium: IFormat;
    small: IFormat;
    thumbnail: IFormat;
  }
}

interface IFormat {
  url: string;
  name: string;
}


