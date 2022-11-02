import createApiClient from "./api.services";

class BookService {
    constructor(baseUrl='/api/managerlibrary'){
        this.api = createApiClient(baseUrl);
    }

    async getAll(){
        return (await this.api.get("/")).data;
    }

    // async createBook(data){
    //     return (await this.api.get("/")).data;
    // }

    // async getBook(bookId){
    //     return (await this.api.get(`/${id}`)).data;
    // }

    // async updateInforBook(bookid, data) {
    //     return (await this.api.put(`/${id}`, data)).data;
    // }

    // async deleteBookId(bookId, data){
    //     return (await this.api.put(`/${id}`)).data;
    // }
}

export default new BookService();