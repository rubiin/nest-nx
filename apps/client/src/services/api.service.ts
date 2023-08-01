export class ApiService {
  static createInstance(): ApiService {
    const activeInstance = new ApiService();


    return activeInstance;
  }

  async getPost(){
    return {data: {results: []}};
  }

}
