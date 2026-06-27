import axios from "axios";

// 🔥 IMPORTANT: Local backend URL (your Flask server)
const BASE_URL = "http://127.0.0.1:5001";

/**
 * Submit prediction to backend
 */
export const submitPrediction = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/predict`, formData);

    console.log("Backend response:", response.data); // debug

    // Normalize response so frontend never breaks
    return {
      status: response.data.Eligibility || "Error"
    };

  } catch (error) {
    console.error("Error submitting prediction:", error);
    return {
      status: "Error"
    };
  }
};

/**
 * Fetch all prediction history
 */
export const fetchPredictions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/history`);
    return response.data;
  } catch (error) {
    console.error("Error fetching predictions:", error);
    return [];
  }
};

/**
 * Delete all predictions
 */
export const deleteAllPredictions = async () => {
  try {
    const response = await axios.delete(`${BASE_URL}/delete-all-predictions`);
    return response.data;
  } catch (error) {
    console.error("Error deleting predictions:", error);
    return { error: "Failed to delete predictions" };
  }
};

/**
 * Fetch dashboard statistics
 */
export const fetchStats = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/stats`);
    return response.data;
  } catch (error) {
    console.error("Error fetching stats:", error);
    return null;
  }
};