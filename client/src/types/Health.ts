export interface HealthData {
    anomaly_count: number;
    anomaly_indices: number[];
    reconstruction_errors: number[];
    threshold: number;
  }
  
  export interface ChartDataPoint {
    timestamp: number;
    error: number;
    threshold: number;
  }