import * as fs from "fs";
import path from "path";

interface ProcessedRequest {
  id: number;
  time: string;
  request: ProcessedLineTitle;
  details: ProcessedLineTitle[];
  error?: unknown;
}

interface ProcessedLineTitle {
  title: string;
  content: string;
  kind: string;
}

function saveProcessedDataToJSON(data: ProcessedRequest[]): void {
  try {
    const filePath = path.join(process.cwd(), "public","assets","files", "processed_data.json");
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log("Processed data saved to", filePath);
  } catch (error) {
    console.error("Error saving processed data to JSON:", error);
  }
}

// Function to split log file based on custom delimiter condition
function splitLogByDelimiter(logData: string): string[] {
  const lines = logData.split("\n");
  const delimiterIndices: number[] = [];

  const delimiter =
    "------------------------------------------------------------------------------------------------------------";

  // Identify rows that should be used as delimiters
  lines.forEach((line, index) => {
    const parts = line.split(" - ");
    if (parts[2] && parts[2].trim() === delimiter) {
      delimiterIndices.push(index);
    }
  });

  // Split the log content based on identified delimiter rows
  const logParts: string[] = [];
  let start = 0;
  delimiterIndices.forEach((delimiterIndex) => {
    logParts.push(lines.slice(start, delimiterIndex).join("\n"));
    start = delimiterIndex + 1;
  });

  // Include the last part if there is any remaining content
  if (start < lines.length) {
    logParts.push(lines.slice(start).join("\n"));
  }

  return logParts;
}

export function logManipulation(): ProcessedRequest[] {
  const allProcessedRequests: ProcessedRequest[] = [];
  let requestId = 1;

  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "files",
      "plantarray.log"
    );
    const logData = fs.readFileSync(filePath, "utf8");
    const requests = splitLogByDelimiter(logData);

    for (const request of requests) {
      const requestObject = requestManipulation(request, requestId);
      allProcessedRequests.push(requestObject);
      requestId++;
    }
  } catch (error) {
    console.error("There has been an error: " + error);
  }

  saveProcessedDataToJSON(allProcessedRequests);
  return allProcessedRequests;
}

function requestManipulation(request: string, id: number): ProcessedRequest {
  const requestLines = request.split("\n");

  if (requestLines.length < 2) {
    return {
      id,
      time: "Invalid Time",
      request: {
        title: "Invalid Title or Request Format",
        content: "Invalid Content or Request Format",
        kind: "Invalid Kind or Request Format",
      },
      details: [
        {
          title: "Invalid Title or Request Format",
          content: "Invalid Content or Request Format",
          kind: "Invalid Kind or Request Format",
        },
      ],
    };
  }

  try {
    const startLine = requestLines[0];
    const [time, kind, lineTitle] = startLine.split(" - ");

    const hasStartRequest = lineTitle.includes("START REQUEST: ");
    const splitSign = hasStartRequest ? ": " : "--> ";
    const [title, content] = lineTitle.split(splitSign);

    const details: ProcessedLineTitle[] = [];

    for (let i = 1; i < requestLines.length; i++) {
      const detailsLineWithFullDetails = requestLines[i];
      const [detailsTime, detailsKind, detailsLineTitle] =
        detailsLineWithFullDetails.split(" - ");
      const detailsSplitSign = hasStartRequest ? ": " : " --> ";

      const [detailsTitle, detailsContent] =
        detailsLineTitle.split(detailsSplitSign);

      details.push({
        title: detailsTitle || "Invalid Title",
        content: detailsContent || "Invalid Content",
        kind: detailsKind || "Invalid Kind",
      });
    }

    return {
      id,
      time: time || "Invalid Time",
      request: {
        title: title || "Invalid Title",
        content: content || "Invalid Content",
        kind: kind || "Invalid Kind",
      },
      details,
    };
  } catch (error) {
    return {
      id,
      time: "unknown",
      request: { title: "unknown", content: "unknown", kind: "unknown" },
      details: [
        {
          title: "unknown",
          content: "unknown",
          kind: "unknown",
        },
      ],
      error: "This is the error the was found: " + error,
    };
  }
}
