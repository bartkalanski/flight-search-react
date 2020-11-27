const mockAxios = jest.genMockFromModule("axios");

mockAxios.create = jest.fn(() => mockAxios);

const baseImplementation = (url, postData) => {
  return new Promise((resolve, reject) => {
    if (url === "/error" || url.indexOf("error") !== -1) {
      reject({
        data: "there was an error",
        Message: "this is an error message",
      });
    } else {
      resolve({
        data: "request was successful",
      });
    }
  });
};

mockAxios.get.mockImplementation(baseImplementation);
mockAxios.post.mockImplementation(baseImplementation);
mockAxios.put.mockImplementation(baseImplementation);
mockAxios.delete.mockImplementation(baseImplementation);
mockAxios.patch.mockImplementation(baseImplementation);

mockAxios.interceptors = {
  request: {
    use: jest.fn(),
    eject: jest.fn(),
  },
  response: {
    use: jest.fn(),
    eject: jest.fn(),
  },
};

export default mockAxios;
