import { useEffect } from "react";
import { supabase } from "../lib/supabase";

const TestSupabase = () => {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase
        .from("cars")
        .select("*");

      console.log("Data:", data);
      console.log("Error:", error);
    };

    testConnection();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>Testing Supabase...</h1>
    </div>
  );
};

export default TestSupabase;