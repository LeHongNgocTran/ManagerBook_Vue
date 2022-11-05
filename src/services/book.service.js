import createApiClient from "./api.services";

class BookService {
    constructor(baseUrl='/api/book'){
        this.api = createApiClient(baseUrl);
    }
    // Thêm sách vào cơ sở dữ liệu
    async create(data){
        return (await this.api.post("/",data)).data;
    }
    // Lấy tất cả các sách
    async getAll(){
        return (await this.api.get("/")).data;
    }
    // Lấy sách theo id
    async getBookId(bookId){
        return (await this.api.get(`/${bookId}`)).data;
    }
    // Cập nhật dữ liệu theo id
    async update(id,data){
        return (await this.api.put(`/${id}`,data)).data;
    }
    // Xóa dữ liệu theo id\
    async deleteId(id){
        return (await this.api.delete(`/${id}`)).data;
    }
    
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
export default new BookService();