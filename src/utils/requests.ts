import { IData, IImage, IResponse } from "~/interface";
import { Method } from "~/types";
const TOKEN = import.meta.env.VITE_STRAPI_TOKEN;
const URL = `${import.meta.env.VITE_STRAPI_URL}/api`;
const BLOG_PATH = `${URL}/blogs`;
const POPULATE_IMAGE = "?populate=*";
const SERVICE_PATH = `${URL}/visits`;
const IMAGE_PATH = `${URL}/upload/files`;

const options = (method: Method, body: string) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${TOKEN}`
    },
    body
  }
}

const getResponse = async (response: Response, errorMessage: string) => {
  return response.ok
    ? { isSuccessful: true, message: "", data: await response.json().then(r => r.data) }
    : { isSuccessful: false, message: `${response.status}: Error while ${errorMessage && "."} ${response.statusText}`, data: undefined };
}

export const sortQuery = (field: number, parameter: string, order: "asc" | "desc") =>
  `sort[${field}]=${parameter}%3A${order}`;

export const pagination = (page: number, pageSize: number): string =>
  `pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

// http://localhost:1337/api/blogs?sort[0]=publishedAt%3Adesc&pagination[page]=1&pagination[pageSize]=3




export const getImage = async (imageId: string) => {
  const response = await fetch(`${IMAGE_PATH}/${imageId}`);
  if (response.ok) {
    return await response.json() as IImage;
  }
  return undefined;
}



export const getBlogs = async (path: string = ""): Promise<IResponse> => {
  return getResponse(await fetch(`${BLOG_PATH}${POPULATE_IMAGE}&${path}&locale=${localStorage.getItem("locale")}`), "requesting blogs");
};

export const getBlog = async (blogId: string): Promise<IResponse> => {
  return getResponse(await fetch(`${BLOG_PATH}/${blogId}${POPULATE_IMAGE}&locale=${localStorage.getItem("locale")}`), "requesting a blog");
};

export const postBlog = async (
  title: string,
  image: string,
  description: string
): Promise<IResponse> => {
  const response = await fetch(BLOG_PATH, options("POST", JSON.stringify({ title, image, description })));
  return getResponse(response, "posting new blog");
};

export const getVisits = async () => {
  return await getResponse(await fetch(SERVICE_PATH), "requesting visits");
};

export const putVisit = async (
  serviceId: string,
  visitType: string,
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string
): Promise<IResponse> => {
  const response = await fetch(`${SERVICE_PATH}/${serviceId}`,
    options("PUT", JSON.stringify({
      data: {
        id: serviceId,
        visitType,
        firstName,
        lastName,
        email,
        phoneNumber,
        isOccupied: true,
      }
    })));
  return await getResponse(response, "scheduling a visit");
};
