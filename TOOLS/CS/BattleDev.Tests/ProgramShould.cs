using System;
using System.IO;
using System.Text;
using Xunit;
using FluentAssertions;

namespace BattleDev.Tests
{
    public class ProgramShould
    {
        const string TestFileFolder = "IO";
        [Theory(DisplayName = "Testing input")]
        [InlineData(1)]
        [InlineData(2)]
        [InlineData(3)]
        [InlineData(4)]
        [InlineData(5)]
        [InlineData(6)]
        public void TestInput(int testNumber)
        {
            string inputPath = Path.Combine(TestFileFolder, $"input{testNumber}.txt");
            if (!File.Exists(inputPath))
            {
                return;
            }

            var inputStream = File.OpenText(inputPath);
            Console.SetIn(inputStream);

            var consoleOutputBuilder = new StringBuilder();
            var consoleOutputWriter = new StringWriter(consoleOutputBuilder);
            Console.SetOut(consoleOutputWriter);

            Program.Main(Array.Empty<string>());

            string outputPath = Path.Combine(TestFileFolder, $"output{testNumber}.txt");

            if (!File.Exists(outputPath))
            {
                throw new FileNotFoundException("Fichier introuvable", outputPath);
            }

            var outputStream = File.OpenText(outputPath);
            var expectedText = outputStream.ReadToEnd().Replace("\n\r", "\n");

            var actualText = consoleOutputBuilder.ToString().Trim().Replace("\r\n", "\n");
            actualText.Should().Be(expectedText);
        }
    }
}
