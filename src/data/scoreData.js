const scoreData = {
    male: {
      category1: {
        '1000米跑': {
          unit: '分:秒',
          scores: [
            { score: 100, value: '3:55' },
            { score: 95, value: '4:03' },
            { score: 90, value: '4:11' },
            { score: 85, value: '4:19' },
            { score: 80, value: '4:27' },
            { score: 75, value: '4:32' },
            { score: 70, value: '4:37' },
            { score: 65, value: '4:42' },
            { score: 60, value: '4:47' },
            { score: 55, value: '4:53' },
            { score: 50, value: '4:59' },
            { score: 45, value: '5:05' },
            { score: 40, value: '5:11' },
            { score: 35, value: '5:17' },
            { score: 30, value: '5:23' },
            { score: 25, value: '5:29' },
            { score: 20, value: '5:35' },
            { score: 15, value: '5:41' },
            { score: 10, value: '5:47' },
            { score: 5, value: '5:53' }
          ],
          bonusPoints: [
            { minValue: '0:0', maxValue: '3:40', bonus: 1.0 },
            { minValue: '3:41', maxValue: '3:54', bonus: 0.5 }
          ],
          valueType: 'time'
        },
        '200米游泳': {
          unit: '分:秒',
          scores: [
            { score: 100, value: '4:36' },
            { score: 95, value: '4:48' },
            { score: 90, value: '5:00' },
            { score: 85, value: '5:12' },
            { score: 80, value: '5:24' },
            { score: 75, value: '5:36' },
            { score: 70, value: '5:48' },
            { score: 65, value: '6:00' },
            { score: 60, value: '6:12' },
            { score: 55, value: '6:24' },
            { score: 50, value: '6:36' },
            { score: 45, value: '6:48' },
            { score: 40, value: '7:00' },
            { score: 35, value: '7:12' },
            { score: 30, value: '7:24' },
            { score: 25, value: '7:36' },
            { score: 20, value: '7:48' },
            { score: 15, value: '8:00' },
            { score: 10, value: '8:12' },
            { score: 5, value: '8:24' }
          ],
          valueType: 'time'
        },
        '4分钟跳绳': {
          unit: '次',
          scores: [
            { score: 100, value: 400 },
            { score: 95, value: 395 },
            { score: 90, value: 390 },
            { score: 85, value: 385 },
            { score: 80, value: 380 },
            { score: 75, value: 370 },
            { score: 70, value: 365 },
            { score: 65, value: 360 },
            { score: 60, value: 340 },
            { score: 55, value: 320 },
            { score: 50, value: 300 },
            { score: 45, value: 290 },
            { score: 40, value: 285 },
            { score: 35, value: 280 },
            { score: 30, value: 275 },
            { score: 25, value: 270 },
            { score: 20, value: 265 },
            { score: 15, value: 260 },
            { score: 10, value: 255 },
            { score: 5, value: 250 }
          ],
          valueType: 'number'
        }
      },
      category2: {
        '50米跑': {
          unit: '秒',
          scores: [
            { score: 100, value: 7.1 },
            { score: 95, value: 7.2 },
            { score: 90, value: 7.3 },
            { score: 85, value: 7.4 },
            { score: 80, value: 7.5 },
            { score: 75, value: 7.6 },
            { score: 70, value: 7.7 },
            { score: 65, value: 7.9 },
            { score: 60, value: 8.1 },
            { score: 55, value: 8.3 },
            { score: 50, value: 8.5 },
            { score: 45, value: 8.7 },
            { score: 40, value: 8.9 },
            { score: 35, value: 9.1 },
            { score: 30, value: 9.3 },
            { score: 25, value: 9.5 },
            { score: 20, value: 9.7 },
            { score: 15, value: 9.9 },
            { score: 10, value: 10.1 },
            { score: 5, value: 10.3 }
          ],
          valueType: 'decimal'
        },
        '立定跳远': {
          unit: '米',
          scores: [
            { score: 100, value: 2.49 },
            { score: 95, value: 2.41 },
            { score: 90, value: 2.33 },
            { score: 85, value: 2.25 },
            { score: 80, value: 2.20 },
            { score: 75, value: 2.15 },
            { score: 70, value: 2.10 },
            { score: 65, value: 2.06 },
            { score: 60, value: 2.02 },
            { score: 55, value: 1.98 },
            { score: 50, value: 1.94 },
            { score: 45, value: 1.90 },
            { score: 40, value: 1.86 },
            { score: 35, value: 1.82 },
            { score: 30, value: 1.78 },
            { score: 25, value: 1.74 },
            { score: 20, value: 1.70 },
            { score: 15, value: 1.66 },
            { score: 10, value: 1.62 },
            { score: 5, value: 1.58 }
          ],
          valueType: 'decimal'
        },
        '实心球': {
          unit: '米',
          scores: [
            { score: 100, value: 9.70 },
            { score: 95, value: 9.40 },
            { score: 90, value: 9.10 },
            { score: 85, value: 8.80 },
            { score: 80, value: 8.50 },
            { score: 75, value: 8.20 },
            { score: 70, value: 7.90 },
            { score: 65, value: 7.60 },
            { score: 60, value: 7.30 },
            { score: 55, value: 7.00 },
            { score: 50, value: 6.70 },
            { score: 45, value: 6.40 },
            { score: 40, value: 6.10 },
            { score: 35, value: 5.80 },
            { score: 30, value: 5.50 },
            { score: 25, value: 5.20 },
            { score: 20, value: 4.90 },
            { score: 15, value: 4.60 },
            { score: 10, value: 4.30 },
            { score: 5, value: 4.00 }
          ],
          valueType: 'decimal'
        },
        '引体向上': {
          unit: '次',
          scores: [
            { score: 100, value: 11 },
            { score: 95, value: 10 },
            { score: 90, value: 9 },
            { score: 80, value: 8 },
            { score: 70, value: 7 },
            { score: 60, value: 6 },
            { score: 50, value: 5 },
            { score: 40, value: 4 },
            { score: 30, value: 3 },
            { score: 20, value: 2 },
            { score: 10, value: 1 }
          ],
          valueType: 'number'
        },
        '25米游泳': {
          unit: '秒',
          scores: [
            { score: 100, value: 22.0 },
            { score: 95, value: 23.0 },
            { score: 90, value: 24.0 },
            { score: 85, value: 25.0 },
            { score: 80, value: 26.0 },
            { score: 75, value: 27.0 },
            { score: 70, value: 28.0 },
            { score: 65, value: 29.0 },
            { score: 60, value: 30.0 },
            { score: 55, value: 31.0 },
            { score: 50, value: 32.0 },
            { score: 45, value: 33.0 },
            { score: 40, value: 34.0 },
            { score: 35, value: 35.0 },
            { score: 30, value: 36.0 },
            { score: 25, value: 37.0 },
            { score: 20, value: 38.0 },
            { score: 15, value: 39.0 },
            { score: 10, value: 40.0 },
            { score: 5, value: 41.0 }
          ],
          valueType: 'decimal'
        }
      },
      category3: {
        '乒乓球': {
          unit: '次',
          scores: [
            { score: 100, value: 25 },
            { score: 96, value: 24 },
            { score: 92, value: 23 },
            { score: 88, value: 22 },
            { score: 84, value: 21 },
            { score: 80, value: 20 },
            { score: 76, value: 19 },
            { score: 72, value: 18 },
            { score: 68, value: 17 },
            { score: 64, value: 16 },
            { score: 60, value: 15 },
            { score: 56, value: 14 },
            { score: 52, value: 13 },
            { score: 48, value: 12 },
            { score: 44, value: 11 },
            { score: 40, value: 10 },
            { score: 36, value: 9 },
            { score: 32, value: 8 },
            { score: 28, value: 7 },
            { score: 24, value: 6 },
            { score: 20, value: 5 },
            { score: 16, value: 4 },
            { score: 12, value: 3 },
            { score: 8, value: 2 },
            { score: 4, value: 1 }
          ],
          valueType: 'number'
        },
        '羽毛球': {
          unit: '分',
          scores: [
            { score: 100, value: 120 },
            { score: 95, value: 98 },
            { score: 90, value: 87 },
            { score: 85, value: 76 },
            { score: 80, value: 65 },
            { score: 75, value: 54 },
            { score: 70, value: 43 },
            { score: 65, value: 32 },
            { score: 60, value: 21 },
            { score: 55, value: 10 },
            { score: 50, value: 9 }
          ],
          scoreRanges: [
            { minScore: 99, maxScore: 120, result: 100 },
            { minScore: 88, maxScore: 98, result: 90 },
            { minScore: 77, maxScore: 87, result: 80 },
            { minScore: 66, maxScore: 76, result: 70 },
            { minScore: 55, maxScore: 65, result: 60 },
            { minScore: 44, maxScore: 54, result: 50 },
            { minScore: 33, maxScore: 43, result: 40 },
            { minScore: 22, maxScore: 32, result: 30 },
            { minScore: 11, maxScore: 21, result: 20 },
            { minScore: 8, maxScore: 10, result: 10 },
            { minScore: 0, maxScore: 7, result: 0 }
          ],
          valueType: 'number'
        },
        '网球': {
          unit: '分',
          scores: [
            { score: 100, value: 120 },
            { score: 90, value: 98 },
            { score: 80, value: 87 },
            { score: 70, value: 76 },
            { score: 60, value: 65 },
            { score: 50, value: 54 },
            { score: 40, value: 43 },
            { score: 30, value: 32 },
            { score: 20, value: 21 },
            { score: 10, value: 10 },
            { score: 0, value: 0 }
          ],
          scoreRanges: [
            { minScore: 99, maxScore: 120, result: 100 },
            { minScore: 88, maxScore: 98, result: 90 },
            { minScore: 77, maxScore: 87, result: 80 },
            { minScore: 66, maxScore: 76, result: 70 },
            { minScore: 55, maxScore: 65, result: 60 },
            { minScore: 44, maxScore: 54, result: 50 },
            { minScore: 33, maxScore: 43, result: 40 },
            { minScore: 22, maxScore: 32, result: 30 },
            { minScore: 11, maxScore: 21, result: 20 },
            { minScore: 8, maxScore: 10, result: 10 },
            { minScore: 0, maxScore: 7, result: 0 }
          ],
          valueType: 'number'
        },
        '武术': {
          unit: '分',
          scores: [
            { score: 100, value: 10.0 },
            { score: 90, value: 9.5 },
            { score: 80, value: 9.0 },
            { score: 70, value: 8.5 },
            { score: 60, value: 8.0 },
            { score: 50, value: 7.5 },
            { score: 40, value: 7.0 },
            { score: 30, value: 6.5 },
            { score: 20, value: 6.0 },
            { score: 10, value: 5.5 }
          ],
          scoreRanges: [
            { minScore: 9.0, maxScore: 10.0, result: 100 },
            { minScore: 7.5, maxScore: 8.9, result: 80 },
            { minScore: 6.0, maxScore: 7.4, result: 60 },
            { minScore: 0.0, maxScore: 5.9, result: 40 }
          ],
          valueType: 'decimal'
        },
        '体操': {
          unit: '分',
          scores: [
            { score: 100, value: 10.0 },
            { score: 90, value: 9.5 },
            { score: 80, value: 9.0 },
            { score: 70, value: 8.5 },
            { score: 60, value: 8.0 },
            { score: 50, value: 7.5 },
            { score: 40, value: 7.0 },
            { score: 30, value: 6.5 },
            { score: 20, value: 6.0 },
            { score: 10, value: 5.5 }
          ],
          scoreRanges: [
            { minScore: 9.0, maxScore: 10.0, result: 100 },
            { minScore: 7.5, maxScore: 8.9, result: 80 },
            { minScore: 6.0, maxScore: 7.4, result: 60 },
            { minScore: 0.0, maxScore: 5.9, result: 40 }
          ],
          valueType: 'decimal'
        }
      },
      category4: {
        '足球': {
          unit: '秒',
          scores: [
            { score: 100, value: 7.6 },
            { score: 95, value: 8.7 },
            { score: 90, value: 9.6 },
            { score: 85, value: 10.5 },
            { score: 80, value: 11.3 },
            { score: 75, value: 12.2 },
            { score: 70, value: 13.1 },
            { score: 65, value: 14.3 },
            { score: 60, value: 15.5 },
            { score: 55, value: 16.0 },
            { score: 50, value: 16.8 },
            { score: 45, value: 17.4 },
            { score: 40, value: 17.9 },
            { score: 35, value: 18.3 },
            { score: 30, value: 19.0 },
            { score: 25, value: 19.6 },
            { score: 20, value: 20.0 },
            { score: 15, value: 20.5 },
            { score: 10, value: 21.0 },
            { score: 5, value: 21.5 }
          ],
          valueType: 'decimal'
        },
        '篮球': {
          unit: '秒',
          scores: [
            { score: 100, value: 20 },
            { score: 95, value: 21 },
            { score: 90, value: 22 },
            { score: 85, value: 23 },
            { score: 80, value: 24 },
            { score: 75, value: 25 },
            { score: 70, value: 27 },
            { score: 65, value: 29 },
            { score: 60, value: 31 },
            { score: 55, value: 33 },
            { score: 50, value: 35 },
            { score: 45, value: 37 },
            { score: 40, value: 39 },
            { score: 35, value: 41 },
            { score: 30, value: 43 },
            { score: 25, value: 45 },
            { score: 20, value: 47 },
            { score: 15, value: 49 },
            { score: 10, value: 51 },
            { score: 5, value: 53 }
          ],
          valueType: 'number'
        },
        '排球': {
          unit: '次',
          scores: [
            { score: 100, value: 45 },
            { score: 95, value: 43 },
            { score: 90, value: 40 },
            { score: 85, value: 37 },
            { score: 80, value: 34 },
            { score: 75, value: 31 },
            { score: 70, value: 29 },
            { score: 65, value: 26 },
            { score: 60, value: 23 },
            { score: 55, value: 20 },
            { score: 50, value: 18 },
            { score: 45, value: 16 },
            { score: 40, value: 14 },
            { score: 35, value: 12 },
            { score: 30, value: 10 },
            { score: 25, value: 8 },
            { score: 20, value: 6 },
            { score: 15, value: 5 },
            { score: 10, value: 4 },
            { score: 5, value: 3 }
          ],
          valueType: 'number'
        }
      }
    },
    female: {
      category1: {
        '800米跑': {
          unit: '分:秒',
          scores: [
            { score: 100, value: '3:40' },
            { score: 95, value: '3:48' },
            { score: 90, value: '3:56' },
            { score: 85, value: '4:04' },
            { score: 80, value: '4:12' },
            { score: 75, value: '4:17' },
            { score: 70, value: '4:22' },
            { score: 65, value: '4:27' },
            { score: 60, value: '4:32' },
            { score: 55, value: '4:38' },
            { score: 50, value: '4:44' },
            { score: 45, value: '4:50' },
            { score: 40, value: '4:56' },
            { score: 35, value: '5:02' },
            { score: 30, value: '5:08' },
            { score: 25, value: '5:14' },
            { score: 20, value: '5:20' },
            { score: 15, value: '5:26' },
            { score: 10, value: '5:32' },
            { score: 5, value: '5:38' }
          ],
          bonusPoints: [
            { minValue: '3:25', maxValue: '3:25', bonus: 1.0 },
            { minValue: '3:26', maxValue: '3:39', bonus: 0.5 }
          ],
          valueType: 'time'
        },
        '200米游泳': {
          unit: '分:秒',
          scores: [
            { score: 100, value: '4:56' },
            { score: 95, value: '5:08' },
            { score: 90, value: '5:20' },
            { score: 85, value: '5:32' },
            { score: 80, value: '5:44' },
            { score: 75, value: '5:56' },
            { score: 70, value: '6:08' },
            { score: 65, value: '6:20' },
            { score: 60, value: '6:32' },
            { score: 55, value: '6:44' },
            { score: 50, value: '6:56' },
            { score: 45, value: '7:08' },
            { score: 40, value: '7:20' },
            { score: 35, value: '7:32' },
            { score: 30, value: '7:44' },
            { score: 25, value: '7:56' },
            { score: 20, value: '8:08' },
            { score: 15, value: '8:20' },
            { score: 10, value: '8:32' },
            { score: 5, value: '8:44' }
          ],
          valueType: 'time'
        },
        '4分钟跳绳': {
          unit: '次',
          scores: [
            { score: 100, value: 405 },
            { score: 95, value: 400 },
            { score: 90, value: 395 },
            { score: 85, value: 390 },
            { score: 80, value: 385 },
            { score: 75, value: 375 },
            { score: 70, value: 370 },
            { score: 65, value: 365 },
            { score: 60, value: 345 },
            { score: 55, value: 325 },
            { score: 50, value: 305 },
            { score: 45, value: 295 },
            { score: 40, value: 290 },
            { score: 35, value: 285 },
            { score: 30, value: 280 },
            { score: 25, value: 275 },
            { score: 20, value: 270 },
            { score: 15, value: 265 },
            { score: 10, value: 260 },
            { score: 5, value: 250 }
          ],
          valueType: 'number'
        }
      },
      category2: {
        '50米跑': {
          unit: '秒',
          scores: [
            { score: 100, value: 8.1 },
            { score: 95, value: 8.2 },
            { score: 90, value: 8.3 },
            { score: 85, value: 8.4 },
            { score: 80, value: 8.5 },
            { score: 75, value: 8.6 },
            { score: 70, value: 8.8 },
            { score: 65, value: 9.0 },
            { score: 60, value: 9.2 },
            { score: 55, value: 9.4 },
            { score: 50, value: 9.6 },
            { score: 45, value: 9.8 },
            { score: 40, value: 10.0 },
            { score: 35, value: 10.2 },
            { score: 30, value: 10.4 },
            { score: 25, value: 10.6 },
            { score: 20, value: 10.8 },
            { score: 15, value: 11.0 },
            { score: 10, value: 11.2 },
            { score: 5, value: 11.4 }
          ],
          valueType: 'decimal'
        },
        '立定跳远': {
          unit: '米',
          scores: [
            { score: 100, value: 1.99 },
            { score: 95, value: 1.93 },
            { score: 90, value: 1.87 },
            { score: 85, value: 1.81 },
            { score: 80, value: 1.77 },
            { score: 75, value: 1.73 },
            { score: 70, value: 1.69 },
            { score: 65, value: 1.65 },
            { score: 60, value: 1.61 },
            { score: 55, value: 1.57 },
            { score: 50, value: 1.53 },
            { score: 45, value: 1.49 },
            { score: 40, value: 1.45 },
            { score: 35, value: 1.41 },
            { score: 30, value: 1.37 },
            { score: 25, value: 1.33 },
            { score: 20, value: 1.28 },
            { score: 15, value: 1.23 },
            { score: 10, value: 1.18 },
            { score: 5, value: 1.13 }
          ],
          valueType: 'decimal'
        },
        '实心球': {
          unit: '米',
          scores: [
            { score: 100, value: 6.80 },
            { score: 95, value: 6.60 },
            { score: 90, value: 6.40 },
            { score: 85, value: 6.20 },
            { score: 80, value: 6.00 },
            { score: 75, value: 5.80 },
            { score: 70, value: 5.60 },
            { score: 65, value: 5.40 },
            { score: 60, value: 5.20 },
            { score: 55, value: 5.00 },
            { score: 50, value: 4.80 },
            { score: 45, value: 4.60 },
            { score: 40, value: 4.40 },
            { score: 35, value: 4.20 },
            { score: 30, value: 4.00 },
            { score: 25, value: 3.80 },
            { score: 20, value: 3.60 },
            { score: 15, value: 3.40 },
            { score: 10, value: 3.20 },
            { score: 5, value: 3.00 }
          ],
          valueType: 'decimal'
        },
        '仰卧起坐': {
          unit: '次',
          scores: [
            { score: 100, value: 50 },
            { score: 95, value: 47 },
            { score: 90, value: 44 },
            { score: 85, value: 41 },
            { score: 80, value: 38 },
            { score: 75, value: 35 },
            { score: 70, value: 32 },
          { score: 65, value: 30 },
          { score: 60, value: 28 },
          { score: 55, value: 26 },
          { score: 50, value: 24 },
          { score: 45, value: 22 },
          { score: 40, value: 20 },
          { score: 35, value: 18 },
          { score: 30, value: 16 },
          { score: 25, value: 14 },
          { score: 20, value: 12 },
          { score: 15, value: 10 },
          { score: 10, value: 8 },
          { score: 5, value: 6 }
        ],
        valueType: 'number'
      },
      '25米游泳': {
        unit: '秒',
        scores: [
          { score: 100, value: 25.0 },
          { score: 95, value: 26.0 },
          { score: 90, value: 27.0 },
          { score: 85, value: 28.0 },
          { score: 80, value: 29.0 },
          { score: 75, value: 30.0 },
          { score: 70, value: 31.0 },
          { score: 65, value: 32.0 },
          { score: 60, value: 33.0 },
          { score: 55, value: 34.0 },
          { score: 50, value: 35.0 },
          { score: 45, value: 36.0 },
          { score: 40, value: 37.0 },
          { score: 35, value: 38.0 },
          { score: 30, value: 39.0 },
          { score: 25, value: 40.0 },
          { score: 20, value: 41.0 },
          { score: 15, value: 42.0 },
          { score: 10, value: 43.0 },
          { score: 5, value: 44.0 }
        ],
        valueType: 'decimal'
      }
    },
    category3: {
      '乒乓球': {
        unit: '次',
        scores: [
          { score: 100, value: 25 },
          { score: 96, value: 24 },
          { score: 92, value: 23 },
          { score: 88, value: 22 },
          { score: 84, value: 21 },
          { score: 80, value: 20 },
          { score: 76, value: 19 },
          { score: 72, value: 18 },
          { score: 68, value: 17 },
          { score: 64, value: 16 },
          { score: 60, value: 15 },
          { score: 56, value: 14 },
          { score: 52, value: 13 },
          { score: 48, value: 12 },
          { score: 44, value: 11 },
          { score: 40, value: 10 },
          { score: 36, value: 9 },
          { score: 32, value: 8 },
          { score: 28, value: 7 },
          { score: 24, value: 6 },
          { score: 20, value: 5 },
          { score: 16, value: 4 },
          { score: 12, value: 3 },
          { score: 8, value: 2 },
          { score: 4, value: 1 }
        ],
        valueType: 'number'
      },
      '羽毛球': {
        unit: '分',
        scores: [
          { score: 100, value: 120 },
          { score: 95, value: 90 },
          { score: 90, value: 80 },
          { score: 85, value: 70 },
          { score: 80, value: 60 },
          { score: 75, value: 50 },
          { score: 70, value: 40 },
          { score: 65, value: 30 },
          { score: 60, value: 20 },
          { score: 55, value: 10 },
          { score: 50, value: 0 }
        ],
        scoreRanges: [
          { minScore: 91, maxScore: 120, result: 100 },
          { minScore: 81, maxScore: 90, result: 90 },
          { minScore: 71, maxScore: 80, result: 80 },
          { minScore: 61, maxScore: 70, result: 70 },
          { minScore: 51, maxScore: 60, result: 60 },
          { minScore: 41, maxScore: 50, result: 50 },
          { minScore: 31, maxScore: 40, result: 40 },
          { minScore: 21, maxScore: 30, result: 30 },
          { minScore: 11, maxScore: 20, result: 20 },
          { minScore: 8, maxScore: 10, result: 10 },
          { minScore: 0, maxScore: 7, result: 0 }
        ],
        valueType: 'number'
      },
      '网球': {
        unit: '分',
        scores: [
          { score: 100, value: 120 },
          { score: 90, value: 90 },
          { score: 80, value: 80 },
          { score: 70, value: 70 },
          { score: 60, value: 60 },
          { score: 50, value: 50 },
          { score: 40, value: 40 },
          { score: 30, value: 30 },
          { score: 20, value: 20 },
          { score: 10, value: 10 },
          { score: 0, value: 0 }
        ],
        scoreRanges: [
          { minScore: 91, maxScore: 120, result: 100 },
          { minScore: 81, maxScore: 90, result: 90 },
          { minScore: 71, maxScore: 80, result: 80 },
          { minScore: 61, maxScore: 70, result: 70 },
          { minScore: 51, maxScore: 60, result: 60 },
          { minScore: 41, maxScore: 50, result: 50 },
          { minScore: 31, maxScore: 40, result: 40 },
          { minScore: 21, maxScore: 30, result: 30 },
          { minScore: 11, maxScore: 20, result: 20 },
          { minScore: 8, maxScore: 10, result: 10 },
          { minScore: 0, maxScore: 7, result: 0 }
        ],
        valueType: 'number'
      },
      '武术': {
        unit: '分',
        scores: [
          { score: 100, value: 10.0 },
          { score: 90, value: 9.5 },
          { score: 80, value: 9.0 },
          { score: 70, value: 8.5 },
          { score: 60, value: 8.0 },
          { score: 50, value: 7.5 },
          { score: 40, value: 7.0 },
          { score: 30, value: 6.5 },
          { score: 20, value: 6.0 },
          { score: 10, value: 5.5 }
        ],
        scoreRanges: [
          { minScore: 9.0, maxScore: 10.0, result: 100 },
          { minScore: 7.5, maxScore: 8.9, result: 80 },
          { minScore: 6.0, maxScore: 7.4, result: 60 },
          { minScore: 0.0, maxScore: 5.9, result: 40 }
        ],
        valueType: 'decimal'
      },
      '体操': {
        unit: '分',
        scores: [
          { score: 100, value: 10.0 },
          { score: 90, value: 9.5 },
          { score: 80, value: 9.0 },
          { score: 70, value: 8.5 },
          { score: 60, value: 8.0 },
          { score: 50, value: 7.5 },
          { score: 40, value: 7.0 },
          { score: 30, value: 6.5 },
          { score: 20, value: 6.0 },
          { score: 10, value: 5.5 }
        ],
        scoreRanges: [
          { minScore: 9.0, maxScore: 10.0, result: 100 },
          { minScore: 7.5, maxScore: 8.9, result: 80 },
          { minScore: 6.0, maxScore: 7.4, result: 60 },
          { minScore: 0.0, maxScore: 5.9, result: 40 }
        ],
        valueType: 'decimal'
      }
    },
    category4: {
      '足球': {
        unit: '秒',
        scores: [
          { score: 100, value: 8.5 },
          { score: 95, value: 10.8 },
          { score: 90, value: 12.9 },
          { score: 85, value: 14.2 },
          { score: 80, value: 16.4 },
          { score: 75, value: 18.3 },
          { score: 70, value: 19.5 },
          { score: 65, value: 20.7 },
          { score: 60, value: 22.0 },
          { score: 55, value: 22.8 },
          { score: 50, value: 23.5 },
          { score: 45, value: 23.9 },
          { score: 40, value: 24.6 },
          { score: 35, value: 25.1 },
          { score: 30, value: 25.5 },
          { score: 25, value: 26.2 },
          { score: 20, value: 26.8 },
          { score: 15, value: 27.3 },
          { score: 10, value: 27.9 },
          { score: 5, value: 28.3 }
        ],
        valueType: 'decimal'
      },
      '篮球': {
        unit: '秒',
        scores: [
          { score: 100, value: 26 },
          { score: 95, value: 27 },
          { score: 90, value: 28 },
          { score: 85, value: 30 },
          { score: 80, value: 32 },
          { score: 75, value: 34 },
          { score: 70, value: 36 },
          { score: 65, value: 38 },
          { score: 60, value: 42 },
          { score: 55, value: 46 },
          { score: 50, value: 50 },
          { score: 45, value: 54 },
          { score: 40, value: 58 },
          { score: 35, value: 62 },
          { score: 30, value: 66 },
          { score: 25, value: 70 },
          { score: 20, value: 74 },
          { score: 15, value: 78 },
          { score: 10, value: 82 },
          { score: 5, value: 86 }
        ],
        valueType: 'number'
      },
      '排球': {
        unit: '次',
        scores: [
          { score: 100, value: 45 },
          { score: 95, value: 43 },
          { score: 90, value: 40 },
          { score: 85, value: 37 },
          { score: 80, value: 34 },
          { score: 75, value: 31 },
          { score: 70, value: 29 },
          { score: 65, value: 26 },
          { score: 60, value: 23 },
          { score: 55, value: 20 },
          { score: 50, value: 18 },
          { score: 45, value: 16 },
          { score: 40, value: 14 },
          { score: 35, value: 12 },
          { score: 30, value: 10 },
          { score: 25, value: 8 },
          { score: 20, value: 6 },
          { score: 15, value: 5 },
          { score: 10, value: 4 },
          { score: 5, value: 3 }
        ],
        valueType: 'number'
      }
    }
  }
};

// 修正后的得分计算逻辑
export const getScoreByPerformance = (gender, category, eventName, performance) => {
    try {
      const eventData = scoreData[gender][category][eventName];
      
      if (!eventData) return { score: 0, bonus: 0 };
      
      // 处理不同类型的成绩
      if (eventData.valueType === 'time') {
        // 将时间转换为秒数进行比较
        const performanceTime = convertTimeToSeconds(performance);
        
        // 对于时间项目，成绩越小越好（时间越短越好）
        for (const item of eventData.scores) {
          const standardTime = convertTimeToSeconds(item.value);
          if (performanceTime <= standardTime) {
            // 额外加分处理(如1000米跑额外加分)
            if (eventData.bonusPoints) {
              for (const bonus of eventData.bonusPoints) {
                const minTime = convertTimeToSeconds(bonus.minValue);
                const maxTime = convertTimeToSeconds(bonus.maxValue);
                if (performanceTime <= maxTime && performanceTime >= minTime) {
                  return { score: item.score, bonus: bonus.bonus };
                }
              }
            }
            return { score: item.score, bonus: 0 };
          }
        }
        
        // 如果成绩比最低分还差，则返回最低分
        return { score: 5, bonus: 0 };
      } 
      else if (eventData.valueType === 'decimal' || eventData.valueType === 'number') {
        // 数值类型的成绩
        const numericalPerformance = parseFloat(performance);
        
        // 检查是否有特殊评分范围
        if (eventData.scoreRanges) {
          for (const range of eventData.scoreRanges) {
            if (numericalPerformance >= range.minScore && numericalPerformance <= range.maxScore) {
              return { score: range.result, bonus: 0 };
            }
          }
        }
        
        // 针对不同项目的比较逻辑（有些项目是越大越好，有些是越小越好）
        const isSmallerBetter = [
          '足球', '篮球', '50米跑', '800米跑', '1000米跑', '25米游泳', '200米游泳'
        ].includes(eventName);
        
        if (isSmallerBetter) {
          // 时间/成绩越小越好的项目
          for (const item of eventData.scores) {
            if (numericalPerformance <= item.value) {
              return { score: item.score, bonus: 0 };
            }
          }
        } else {
          // 数值越大越好的项目（如跳远、引体向上、仰卧起坐等）
          for (const item of eventData.scores) {
            if (numericalPerformance >= item.value) {
              return { score: item.score, bonus: 0 };
            }
          }
        }
        
        // 如果找不到匹配的分数，返回最低分
        return { score: 0, bonus: 0 };
      }
      
      return { score: 0, bonus: 0 };
    } catch (error) {
      console.error('计算分数出错:', error);
      return { score: 0, bonus: 0 };
    }
  };

// 辅助函数：将时间字符串转换为秒数
export const convertTimeToSeconds = (timeStr) => {
  const parts = timeStr.split(':');
  if (parts.length === 2) {
    const minutes = parseInt(parts[0], 10);
    const seconds = parseFloat(parts[1]);
    return minutes * 60 + seconds;
  }
  return parseFloat(timeStr);
};

// 折算分数（根据权重）
export const calculateWeightedScore = (rawScore, category) => {
  const weights = {
    category1: 0.06,
    category2: 0.03,
    category3: 0.03,
    category4: 0.03
  };
  
  return rawScore * weights[category];
};

// 计算最终分数
export const calculateFinalScore = (scores) => {
    // 计算原始总分
    const rawTotal = scores.reduce((sum, score) => sum + score, 0);

    if (rawTotal >= 15) {
        return 15; // 如果总分大于等于15，直接返回15
    }
    
    // 按0.25进制进行进位或退位
    // 14-14.24分 → 14分
    // 14.25-14.5分 → 14.5分
    // 14.5-14.74分 → 14.5分
    // 14.75-15分 → 15分
    
    // 获取整数部分
    const integerPart = Math.floor(rawTotal);
    // 获取小数部分
    const decimalPart = rawTotal - integerPart;
    
    // 应用0.25进制规则
    let finalDecimal;
    if (decimalPart < 0.25) {
      finalDecimal = 0;
    } else if (decimalPart >= 0.25 && decimalPart <= 0.5) {
      finalDecimal = 0.5;
    } else if (decimalPart > 0.5 && decimalPart < 0.75) {
      finalDecimal = 0.5;
    } else {  // decimalPart >= 0.75
      finalDecimal = 1;
    }
    
    // 如果小数部分进位为1，可能需要增加整数部分
    if (finalDecimal === 1) {
      return integerPart + 1;
    } else {
      return integerPart + finalDecimal;
    }
  };

export const getCategoryEvents = (gender, category) => {
  return Object.keys(scoreData[gender][category]);
};

export default scoreData;