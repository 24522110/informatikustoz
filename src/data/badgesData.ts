import { StudentBadge } from '../types';

export const initialBadgesData: StudentBadge[] = [
  {
    id: "first-lesson",
    title: {
      'uz-Latn': "Ilk qadam",
      'uz-Cyrl': "Илк қадам",
      'ru': "Первый шаг",
      'en': "First Step"
    },
    description: {
      'uz-Latn': "Birinchi darsni muvaffaqiyatli yakunlaganingiz uchun beriladi.",
      'uz-Cyrl': "Биринчи дарсни муваффақиятли якунлаганингиз учун берилади.",
      'ru': "Присуждается за успешное завершение первого урока.",
      'en': "Awarded for completing your first structured lesson."
    },
    icon: "award"
  },
  {
    id: "fast-typer",
    title: {
      'uz-Latn': "Klaviatura ustasi",
      'uz-Cyrl': "Клавиатура устаси",
      'ru': "Мастер клавиатуры",
      'en': "Typing Master"
    },
    description: {
      'uz-Latn': "Klaviatura tezligi mashqida daqiqasiga 30+ so‘z terganingiz uchun.",
      'uz-Cyrl': "Клавиатура тезлиги машқида дақиқасига 30+ сўз терганингиз учун.",
      'ru': "За скорость набора более 30 слов в минуту в тренажере печати.",
      'en': "Attained 30+ WPM on the typing speed simulator."
    },
    icon: "zap"
  },
  {
    id: "cyber-detective",
    title: {
      'uz-Latn': "Kiber Posbon",
      'uz-Cyrl': "Кибер Посбон",
      'ru': "Киберстраж",
      'en': "Cyber Guardian"
    },
    description: {
      'uz-Latn': "Fishing va kiberxavfsizlik o‘yinini 100% to‘g‘ri yechganingiz uchun.",
      'uz-Cyrl': "Фишинг ва киберхавфсизлик ўйинини 100% тўғри ечганингиз учун.",
      'ru': "За прохождение сценариев фишинга без единой ошибки.",
      'en': "Successfully identified all phishing and fraudulent threats."
    },
    icon: "shield-check"
  },
  {
    id: "algo-master",
    title: {
      'uz-Latn': "Algoritm dahosi",
      'uz-Cyrl': "Алгоритм даҳоси",
      'ru': "Гений алгоритмов",
      'en': "Algorithm Prodigy"
    },
    description: {
      'uz-Latn': "Robotni to‘siqlarsiz manzilga yetkazganingiz uchun.",
      'uz-Cyrl': "Роботни тўсиқларсиз манзилга етказганингиз учун.",
      'ru': "За составление идеального маршрута для робота-исследователя.",
      'en': "Guided the grid robot to its target through obstacle navigation."
    },
    icon: "sparkles"
  }
];
