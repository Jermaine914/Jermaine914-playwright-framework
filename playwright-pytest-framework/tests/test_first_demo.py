def test_first_demo(page):
    page.goto("https://example.com")
    assert "Example" in page.title()
