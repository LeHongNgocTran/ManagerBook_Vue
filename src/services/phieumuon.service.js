import createApiClient from "./api.services";

class PhieuMuonService {
  constructor(baseUrl = '/api/phieumuon') {
    this.api = createApiClient(baseUrl);
  }

  async getAllPhieuMuon(){
    return (await this.api.get("/")).data;
  }
}
export default new PhieuMuonService();
