import axios from "axios";
import { isEmpty } from "lodash";
import { IZipCodeService } from "../interfaces/IZipCodeService";

const getZipCodesinfo = async ({ value, setLoading }: IZipCodeService) => {
  try {
    setLoading(true);
    const { data } = await axios.get(
      `https://app.zipcodebase.com/api/v1/search?codes=${value}&country=us`,
      {
        params: {
          apikey: process.env.REACT_APP_ZIP_APIKEY,
        },
      },
    );
    setLoading(false);
    return !isEmpty(data.results) ? data?.results[value][0] : [];
  } catch (error: unknown) {
    setLoading(false);
    return "Failed to load information for this postal code";
  }
};

export default getZipCodesinfo;
