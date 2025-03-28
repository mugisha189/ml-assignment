export const healthAssessment = {
    assessBridgeCondition: (anomalyCount: number): string => {
      if (anomalyCount === 0) return "Excellent";
      if (anomalyCount <= 2) return "Good";
      if (anomalyCount <= 5) return "Fair";
      return "Poor";
    },
  
    determineNextMaintenance: (condition: string, currentDate: string): string => {
      const date = new Date(currentDate);
      switch (condition) {
        case "Poor": date.setDate(date.getDate() + 7); break;
        case "Fair": date.setMonth(date.getMonth() + 1); break;
        case "Good": date.setMonth(date.getMonth() + 3); break;
        case "Excellent": date.setMonth(date.getMonth() + 6); break;
      }
      return date.toISOString().split('T')[0];
    },
  
    assessThreatLevel: (anomalyCount: number, errors: number[]): string => {
      const maxError = Math.max(...errors, 0);
      if (anomalyCount > 5 || maxError > 0.8) return "High";
      if (anomalyCount > 2 || maxError > 0.5) return "Medium";
      return "Low";
    },
  
    getHealthIndex: (anomalyCount: number) => {
      if (anomalyCount === 0) return { value: 90, color: '#4caf50' };
      if (anomalyCount < 3) return { value: 75, color: '#ff9800' };
      return { value: 60, color: '#f44336' };
    }
  };