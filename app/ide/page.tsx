"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, Clock, Code, Download, FileCode, Play, RotateCcw, Save, Settings, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import dynamic from "next/dynamic"

// Dynamically import Ace Editor to avoid SSR issues
const AceEditor = dynamic(
  async () => {
    const ace = await import("react-ace")

    // Import language modes
    await import("ace-builds/src-noconflict/mode-javascript")
    await import("ace-builds/src-noconflict/mode-python")
    await import("ace-builds/src-noconflict/mode-java")
    await import("ace-builds/src-noconflict/mode-c_cpp")

    // Import theme
    await import("ace-builds/src-noconflict/theme-monokai")

    // Import editor features
    await import("ace-builds/src-noconflict/ext-language_tools")

    return ace.default
  },
  {
    ssr: false,
    loading: () => <div className="h-full w-full flex items-center justify-center bg-[#0d1117]">Loading editor...</div>,
  },
)

export default function CodeEditor() {
  const [time, setTime] = useState(900) // 15 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)
  const [language, setLanguage] = useState<keyof typeof initialCode>("javascript")
  const [activeTab, setActiveTab] = useState("editor")
  const [consoleOutput, setConsoleOutput] = useState("// Run your code to see output here")
  const [isRunningCode, setIsRunningCode] = useState(false)

  const editorRef = useRef(null)
  const testsEditorRef = useRef(null)

  const initialCode = {
    javascript: `function binarySearch(nums, target) {
  // Write your solution here
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
    // Your code here
  }
  
  return -1; // Target not found
}

// Example usage:
// const result = binarySearch([1, 2, 3, 4, 5], 3);
// console.log(result);
`,
    python: `def binary_search(nums, target):
    # Write your solution here
    left = 0
    right = len(nums) - 1
    
    while left <= right:
        # Your code here
        pass
    
    return -1  # Target not found

# Example usage:
# result = binary_search([1, 2, 3, 4, 5], 3)
# print(result)
`,
    java: `public class Solution {
    public static int binarySearch(int[] nums, int target) {
        // Write your solution here
        int left = 0;
        int right = nums.length - 1;
        
        while (left <= right) {
            // Your code here
        }
        
        return -1; // Target not found
    }
    
    public static void main(String[] args) {
        // Example usage:
        // int[] nums = {1, 2, 3, 4, 5};
        // int result = binarySearch(nums, 3);
        // System.out.println(result);
    }
}
`,
    cpp: `#include <iostream>
#include <vector>

int binarySearch(std::vector<int>& nums, int target) {
    // Write your solution here
    int left = 0;
    int right = nums.size() - 1;
    
    while (left <= right) {
        // Your code here
    }
    
    return -1; // Target not found
}

// Example usage:
// int main() {
//     std::vector<int> nums = {1, 2, 3, 4, 5};
//     int result = binarySearch(nums, 3);
//     std::cout << result << std::endl;
//     return 0;
// }
`,
  }

  const testCode = {
    javascript: `// Test cases for binary search
function runTests() {
  const testCases = [
    { nums: [1, 2, 3, 4, 5], target: 3, expected: 2 },
    { nums: [1, 2, 3, 4, 5], target: 6, expected: -1 },
    { nums: [-5, -2, 0, 3, 5, 9, 12], target: 9, expected: 5 },
    { nums: [1], target: 1, expected: 0 },
    { nums: [1, 3, 5, 7, 9], target: 8, expected: -1 }
  ];
  
  let passed = 0;
  
  for (const test of testCases) {
    const result = binarySearch(test.nums, test.target);
    if (result === test.expected) {
      passed++;
      console.log(\`✅ Test passed: \${JSON.stringify(test)}\`);
    } else {
      console.error(\`❌ Test failed: \${JSON.stringify(test)}\`);
      console.error(\`   Expected: \${test.expected}, Got: \${result}\`);
    }
  }
  
  console.log(\`\${passed}/\${testCases.length} tests passed\`);
}

// Uncomment to run tests
// runTests();`,
    python: `# Test cases for binary search
def run_tests():
    test_cases = [
        {"nums": [1, 2, 3, 4, 5], "target": 3, "expected": 2},
        {"nums": [1, 2, 3, 4, 5], "target": 6, "expected": -1},
        {"nums": [-5, -2, 0, 3, 5, 9, 12], "target": 9, "expected": 5},
        {"nums": [1], "target": 1, "expected": 0},
        {"nums": [1, 3, 5, 7, 9], "target": 8, "expected": -1}
    ]
    
    passed = 0
    
    for test in test_cases:
        result = binary_search(test["nums"], test["target"])
        if result == test["expected"]:
            passed += 1
            print(f"✅ Test passed: {test}")
        else:
            print(f"❌ Test failed: {test}")
            print(f"   Expected: {test['expected']}, Got: {result}")
    
    print(f"{passed}/{len(test_cases)} tests passed")

# Uncomment to run tests
# run_tests()`,
    java: `// Test cases for binary search
class TestRunner {
    public static void runTests() {
        int[][] numArrays = {
            {1, 2, 3, 4, 5},
            {1, 2, 3, 4, 5},
            {-5, -2, 0, 3, 5, 9, 12},
            {1},
            {1, 3, 5, 7, 9}
        };
        
        int[] targets = {3, 6, 9, 1, 8};
        int[] expected = {2, -1, 5, 0, -1};
        
        int passed = 0;
        
        for (int i = 0; i < numArrays.length; i++) {
            int result = Solution.binarySearch(numArrays[i], targets[i]);
            if (result == expected[i]) {
                passed++;
                System.out.println("✅ Test passed: target=" + targets[i]);
            } else {
                System.out.println("❌ Test failed: target=" + targets[i]);
                System.out.println("   Expected: " + expected[i] + ", Got: " + result);
            }
        }
        
        System.out.println(passed + "/" + numArrays.length + " tests passed");
    }
    
    public static void main(String[] args) {
        // Uncomment to run tests
        // runTests();
    }
}`,
    cpp: `// Test cases for binary search
void runTests() {
    std::vector<std::vector<int>> numArrays = {
        {1, 2, 3, 4, 5},
        {1, 2, 3, 4, 5},
        {-5, -2, 0, 3, 5, 9, 12},
        {1},
        {1, 3, 5, 7, 9}
    };
    
    std::vector<int> targets = {3, 6, 9, 1, 8};
    std::vector<int> expected = {2, -1, 5, 0, -1};
    
    int passed = 0;
    
    for (size_t i = 0; i < numArrays.size(); i++) {
        int result = binarySearch(numArrays[i], targets[i]);
        if (result == expected[i]) {
            passed++;
            std::cout << "✅ Test passed: target=" << targets[i] << std::endl;
        } else {
            std::cout << "❌ Test failed: target=" << targets[i] << std::endl;
            std::cout << "   Expected: " << expected[i] << ", Got: " << result << std::endl;
        }
    }
    
    std::cout << passed << "/" << numArrays.size() << " tests passed" << std::endl;
}

// Uncomment in main() to run tests
// int main() {
//     runTests();
//     return 0;
// }
`,
  }

  const [code, setCode] = useState(initialCode[language])
  const [tests, setTests] = useState(testCode[language])

  useEffect(() => {
    setCode(initialCode[language])
    setTests(testCode[language])
  }, [language])

  useEffect(() => {
    let interval
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      setIsRunning(false)
    }
    return () => clearInterval(interval)
  }, [isRunning, time])

  const formatTime = (seconds:number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const getEditorMode = () => {
    switch (language) {
      case "javascript":
        return "javascript"
      case "python":
        return "python"
      case "java":
        return "java"
      case "cpp":
        return "c_cpp"
      default:
        return "javascript"
    }
  }

  const handleRun = () => {
    setIsRunningCode(true)
    setConsoleOutput("Running code...\n")

    // Simulate code execution with a delay
    setTimeout(() => {
      try {
        // This is a simplified simulation of running the code
        // In a real app, you'd use a secure sandboxed environment
        if (language === "javascript") {
          // Create a mock console.log that captures output
          const logs = []
            interface MockConsole {
            log: (...args: any[]) => void;
            error: (...args: any[]) => void;
            }

            const mockConsole: MockConsole = {
            log: (...args: any[]) => logs.push(args.map((arg) => String(arg)).join(" ")),
            error: (...args: any[]) => logs.push(`Error: ${args.map((arg) => String(arg)).join(" ")}`),
            }

          // Extract the function from the code
          const functionCode = code

          // Create a simulated output based on the code content
          if (
            functionCode.includes("const mid = Math.floor((left + right) / 2)") ||
            functionCode.includes("let mid = Math.floor((left + right) / 2)")
          ) {
            logs.push("✅ Binary search implementation detected")
            logs.push("Running test with [1, 2, 3, 4, 5] and target 3...")
            logs.push("Result: 2")
            logs.push("Test passed!")
          } else {
            logs.push("⚠️ Incomplete binary search implementation")
            logs.push("Hint: Calculate the middle index using Math.floor((left + right) / 2)")
          }

          setConsoleOutput(logs.join("\n"))
        } else {
          setConsoleOutput(
            `Running ${language} code is not supported in this demo.\nPlease use JavaScript for this example.`,
          )
        }
      } catch (error) {
        if (error instanceof Error) {
          setConsoleOutput(`Error executing code: ${error.message}`)
        } else {
          setConsoleOutput('Error executing code')
        }
      } finally {
        setIsRunningCode(false)
      }
    }, 1000)
  }

  const handleReset = () => {
    setTime(900)
    setIsRunning(false)
  }

  const handleStartTimer = () => {
    setIsRunning(true)
  }

  const handleResetCode = () => {
    setCode(initialCode[language])
  }

  return (
    <div className="flex flex-col h-screen bg-[#0a0e17] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 p-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
          <Button variant="outline" className="text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Challenge
          </Button>

          <div className="flex items-center gap-2 bg-amber-900/50 px-3 py-1.5 rounded-md">
            <Clock className="h-4 w-4 text-amber-500" />
            <span className="text-amber-400 font-mono">{formatTime(time)}</span>
            {!isRunning ? (
              <Button
                size="sm"
                variant="ghost"
                className="h-6 px-2 text-xs text-amber-400 hover:text-amber-300 hover:bg-amber-950"
                onClick={handleStartTimer}
              >
                Start
              </Button>
            ) : (
              <Button
                size="sm"
                variant="ghost"
                className="h-6 px-2 text-xs text-amber-400 hover:text-amber-300 hover:bg-amber-950"
                onClick={() => setIsRunning(false)}
              >
                Pause
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              className="h-6 px-2 text-xs text-amber-400 hover:text-amber-300 hover:bg-amber-950"
              onClick={handleReset}
            >
              <RotateCcw className="h-3 w-3" />
            </Button>
          </div>

          <Select value={language} onValueChange={(value) => setLanguage(value as keyof typeof initialCode)}>
            <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="border-gray-700 hover:bg-gray-800 hover:text-white text-black">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Problem Description */}
        <div className="w-1/3 border-r border-gray-800 overflow-y-auto p-4">
          <h1 className="text-xl font-bold mb-4">Binary Search Implementation</h1>
          <div className="flex gap-2 mb-4">
            <span className="bg-orange-700 text-xs px-2 py-0.5 rounded">Intermediate</span>
            <span className="bg-gray-700 text-xs px-2 py-0.5 rounded">Array</span>
            <span className="bg-gray-700 text-xs px-2 py-0.5 rounded">Search</span>
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-lg font-medium mt-6 mb-2">Problem Statement</h2>
            <p className="text-gray-300 mb-4">
              Implement a binary search algorithm to find a target value in a sorted array. The function should return
              the index of the target if found, or -1 if not found.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-2">Examples</h2>
            <div className="bg-gray-800 p-3 rounded-md mb-4">
              <p className="text-sm font-mono mb-2">Input: nums = [1, 2, 3, 4, 5], target = 3</p>
              <p className="text-sm font-mono">Output: 2</p>
            </div>

            <div className="bg-gray-800 p-3 rounded-md mb-4">
              <p className="text-sm font-mono mb-2">Input: nums = [1, 2, 3, 4, 5], target = 6</p>
              <p className="text-sm font-mono">Output: -1</p>
            </div>

            <h2 className="text-lg font-medium mt-6 mb-2">Constraints</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>1 ≤ nums.length ≤ 10^4</li>
              <li>-10^4 ≤ nums[i] ≤ 10^4</li>
              <li>All elements in nums are unique</li>
              <li>nums is sorted in ascending order</li>
            </ul>

            <h2 className="text-lg font-medium mt-6 mb-2">Hints</h2>
            <div className="bg-blue-900/30 border border-blue-800 p-3 rounded-md">
              <p className="text-gray-300">
                Remember that binary search works by repeatedly dividing the search interval in half.
              </p>
            </div>
          </div>
        </div>

        {/* Code Editor and Output */}
        <div className="flex-1 flex flex-col">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <div className="border-b border-gray-800 px-4">
              <TabsList className="bg-transparent border-b-0">
                <TabsTrigger value="editor" className="data-[state=active]:bg-gray-800">
                  <FileCode className="mr-2 h-4 w-4" />
                  solution.
                  {language === "javascript"
                    ? "js"
                    : language === "python"
                      ? "py"
                      : language === "java"
                        ? "java"
                        : "cpp"}
                </TabsTrigger>
                <TabsTrigger value="tests" className="data-[state=active]:bg-gray-800">
                  <FileCode className="mr-2 h-4 w-4" />
                  tests.
                  {language === "javascript"
                    ? "js"
                    : language === "python"
                      ? "py"
                      : language === "java"
                        ? "java"
                        : "cpp"}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="editor" className="flex-1 flex flex-col m-0 p-0">
              <div className="flex-1 bg-[#0d1117]">
                {AceEditor && (
                  <AceEditor
                    mode={getEditorMode()}
                    theme="monokai"
                    name="code-editor"
                    value={code}
                    onChange={setCode}
                    fontSize={14}
                    width="100%"
                    height="100%"
                    showPrintMargin={false}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                      enableBasicAutocompletion: true,
                      enableLiveAutocompletion: true,
                      enableSnippets: true,
                      showLineNumbers: true,
                      tabSize: 2,
                    }}
                  />
                )}
              </div>

              <div className="border-t border-gray-800 p-3 flex justify-between items-center">
                <div className="flex gap-2">
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800 hover:text-white text-black">
                    <Save className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800  text-black">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-black" onClick={handleResetCode}>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700" onClick={handleRun} disabled={isRunningCode}>
                    <Play className="mr-2 h-4 w-4" />
                    Run
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tests" className="flex-1 m-0 p-0">
              <div className="flex-1 bg-[#0d1117]">
                {AceEditor && (
                  <AceEditor
                    mode={getEditorMode()}
                    theme="monokai"
                    name="tests-editor"
                    value={tests}
                    onChange={setTests}
                    fontSize={14}
                    width="100%"
                    height="100%"
                    showPrintMargin={false}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                      enableBasicAutocompletion: true,
                      enableLiveAutocompletion: true,
                      enableSnippets: true,
                      showLineNumbers: true,
                      tabSize: 2,
                    }}
                  />
                )}
              </div>
            </TabsContent>
          </Tabs>

          <div className="h-1/3 border-t border-gray-800">
            <div className="flex items-center px-4 py-2 border-b border-gray-800 bg-gray-900">
              <Terminal className="mr-2 h-4 w-4 text-gray-400" />
              <span className="text-sm font-medium">Console Output</span>
            </div>
            <div className="p-4 font-mono text-sm h-full overflow-auto bg-[#0d1117] whitespace-pre-wrap">
              {consoleOutput}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

