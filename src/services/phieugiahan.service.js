import createApiClient from "./api.services";

class PhieuGiaHanService {
  constructor(baseUrl = "/api/phieugiahan") {
    this.api = createApiClient(baseUrl);
  }
  async getAllPhieuGiaHan() {
    return (await this.api.get("/")).data;
  }
  async createPhieuGiaHan(data) {
    return (await this.api.post("/", data)).data;
  }
  async getInforById(id){
    return (await this.api.get(`/${id}`)).data;
  }
  async getDetails(data){
    return (await this.api.post("/details",data)).data;
  }
  async getInforGiaHanUser(data){
    return (await this.api.post("/PGH",data)).data;
  }
  async duyetphieu(id,data){
    return (await this.api.put(`/${id}`,data)).data;
  }
}

export default new PhieuGiaHanService();
