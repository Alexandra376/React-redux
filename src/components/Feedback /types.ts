export interface FeedbackProps {
  countLike: number;
  countDislike: number
  clickOnAddLike: () => void;
  clickOnAddDislike: () => void;
  clickOnResetResults: () => void;
}
