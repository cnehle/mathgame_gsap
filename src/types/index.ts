export interface Shape {
  name: string;
  question: string;
  draw(cx: number, cy: number, delay: number): string;
}

export interface Question {
  text: string;
  answer: number;
}

export type GamePhase = 'menu' | 'playing' | 'complete';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'drawing';

export interface DifficultyConfig {
  label: string;
  labelRu: string;
  maxCount: number;
  useAddition: boolean;
  useSubtraction: boolean;
  timeLimit: number | null;
  drawingMode: boolean;
}

export interface GameState {
  phase: GamePhase;
  score: number;
  questionIndex: number;
  totalQuestions: number;
  answered: boolean;
  difficulty: Difficulty;
}

export interface MouseState {
  x: number;
  y: number;
  normX: number;
  normY: number;
}

export interface Point {
  x: number;
  y: number;
}

export interface RecognizerTemplate {
  digit: number;
  points: Point[];
}

export interface RecognitionResult {
  digit: number;
  score: number;
}