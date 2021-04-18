Feature: Sample Page
  The sample page displays a heading and some content.

  @i-navigate-to-the-sample-page
  Scenario: I navigate to the sample page
    When I navigate to the "sample" screen
    Then I see the screen with title "Sample Page"
