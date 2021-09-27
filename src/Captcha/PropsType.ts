export type CaptchaType = 'auto' | 'slide' | 'point';

export type Type = 'popup' | 'embed';

export interface CaptchaModel {
  image?: string;
  token?: string;
  secretKey?: string;
  word?: string;
  block?: string;
}

export interface CaptchaProps {
  /**
   * 后台路径前缀
   */
  path: string;

  /**
   * 验证码类型
   * @default auto
   */
  captchaType: CaptchaType;
  /**
   * 类型
   * @default popup
   */
  type: Type;

  /**
   * 取消事件
   */
  onCancel: () => void;
  /**
   * 校验失败
   */
  onFail: (msg: string) => void;
  /**
   * 校验成功
   */
  onSuccess: (data: any) => void;
}