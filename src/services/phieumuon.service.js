import createApiClient from "./api.services";

class PhieuMuonService {
  constructor(baseUrl = '/api/phieumuon') {
    this.api = createApiClient(baseUrl);
  }

  async getAllPhieuMuon(){
    return (await this.api.get("/")).data;
  }
  async createPhieuMuon(data){
    return (await this.api.post("/",data)).data;
  }
  async getIdPhieuMuon(id){
    return (await this.api.get(`/${id}`)).data;
  }
  async duyetphieu(id,data){
    return (await this.api.put(`/${id}`,data)).data;
  }
  async getPhieuMuonByMSSV(name){
    return (await this.api.post("/QLPM",name)).data
  }
}
export default new PhieuMuonService();
