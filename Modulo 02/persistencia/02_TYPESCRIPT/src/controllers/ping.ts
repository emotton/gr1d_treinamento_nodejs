import { Body, Get, Path, Post, Put, Route, SuccessResponse, Tags } from "tsoa";
interface PingResponse {
  message: string;
}

interface Ping2Response {
  message: string;
  status: boolean;
}

interface Ping3Response {
  message: string;
  status: boolean;
  code: number;
}

export interface PingRequest {
  message: string;
  code: number;
}

@Route("ping")
@Tags("Tools")
export default class PingController {
  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    return {
      message: "pong",
    };
  }

  @Get("/test/{id}")
  public async getMessageById(@Path("id") ID: number): Promise<Ping2Response> {
    return {
      message: `pong-${ID}`,
      status: true,
    };
  }

  @SuccessResponse('201', 'Created')
  @Post("/test")
  public async postMessage(@Body() requestBody: PingRequest): Promise<Ping2Response> {
    console.log(requestBody.code);
    return {
      message: `pong-${requestBody.code}`,
      status: true,
    };
  }

  @Put("/test/{id}")
  public async putMessage(@Path("id") ID: number, @Body() requestBody: PingRequest): Promise<Ping3Response> {
    return {
      message: `pong-${ID}`,
      status: true,
      code: requestBody.code
    };
  }
}
