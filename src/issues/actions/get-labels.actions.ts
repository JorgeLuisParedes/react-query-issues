import { githubApi } from "../../api";
import { sleep } from "../../helpers";
import { GithubLAbel } from "../interfaces";

export const getLabels = async (): Promise<GithubLAbel[]> => {
  await sleep(1500);
  const { data } = await githubApi.get<GithubLAbel[]>("/labels");
  //   console.log(data);
  return data;
};
