import axios from "axios";
import Config from "../../services/Config";
import { AxiosResponse } from "axios";

class FontService {
  getFonts() {
    return axios.get(Config.apiUrl).then((response: AxiosResponse<any>) => {
      return response.data;
    });
  }
}
export default new FontService();
