import createApiClient from "./api.services";
class AccountService {
    constructor(baseUrl='/api/account'){
        this.api = createApiClient(baseUrl);
    }

    async getAll(){
        return (await this.api.get("/")).data;
    }

    async login(data){
        return (await this.api.post("/",data)).data;
    }
}

export default new AccountService();