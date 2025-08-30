type NavDataItem = {
  date: string;
  nav: number;
};

export const processNAVData = (navData: NavDataItem[]) => {
  const sortedData = [...navData].sort((a, b) => {
    const dateA = new Date(a.date.split('-').reverse().join('-'));
    const dateB = new Date(b.date.split('-').reverse().join('-'));
    return dateA.getTime() - dateB.getTime();
  });

  const processedData: {
      date: string; nav: number; normalizedValue: number; drawdown: number; returnsPercent: number; benchmark: number; // Simulated benchmark
  }[] = [];
  let peak = 0;
  const baseNAV = sortedData.length > 0 ? sortedData[0].nav : 0;

  sortedData.forEach((item, index) => {
    const nav = item.nav;
    const date = item.date.split('-').reverse().join('-');

    if (nav > peak) {
      peak = nav;
    }
    
    const drawdown = peak > 0 ? ((nav - peak) / peak) * 100 : 0;
    const normalizedValue = (nav / baseNAV) * 100;
    const returnsPercent = ((nav - baseNAV) / baseNAV) * 100;

    processedData.push({
      date: date,
      nav: nav,
      normalizedValue: Math.round(normalizedValue * 100) / 100,
      drawdown: Math.round(drawdown * 100) / 100,
      returnsPercent: Math.round(returnsPercent * 100) / 100,
      benchmark: Math.round((100 + (index * 0.5)) * 100) / 100 // Simulated benchmark
    });
  });

  return processedData;
};