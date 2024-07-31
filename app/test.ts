export const postingPost = async ({
  testTwo,
  hello,
}: {
  testTwo: string;
  hello: boolean;
}) => {
  try {
    const response = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        testTwo,
        hello,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const getServiceData = async () => {
  try {
    const response = await fetch("/api/second");

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Server response error:", errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
