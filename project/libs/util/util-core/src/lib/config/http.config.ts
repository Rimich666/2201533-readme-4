import {registerAs} from "@nestjs/config";
import * as Joi from "joi";

export const DEFAULT_MAX_REDIRECTS = 5;
export const DEFAULT_TIMEOUT = 5000;

export interface HttpConfig {
  maxRedirect: number;
  timeout: number;
}

export default registerAs('http', (): HttpConfig => {
  const config: HttpConfig = {
    maxRedirect : parseInt(process.env.HTTP_CLIENT_MAX_REDIRECTS  || DEFAULT_MAX_REDIRECTS.toString(), 10),
    timeout: parseInt(process.env.HTTP_CLIENT_TIMEOUT || DEFAULT_TIMEOUT.toString(), 10),
  };

  const validationSchema = Joi.object<HttpConfig>({
    maxRedirect: Joi.number().port().default(DEFAULT_MAX_REDIRECTS),
    timeout: Joi.number().port().default(DEFAULT_TIMEOUT),
  });

  const { error } = validationSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(
      `[Http Config]: Environments validation failed. Please check .env file.
      Error message: Http.${error.message}`,
    );
  }

  return config;
});
