import re
import os

SOURCE_FILE = 'context/writings/lifegoalsstudyguide.md'
OUTPUT_DIR = 'days'

def main():
    if not os.path.exists(SOURCE_FILE):
        print(f"Error: Source file {SOURCE_FILE} not found.")
        return

    with open(SOURCE_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    current_quarter = ""
    current_theme = ""
    
    current_day_num = None
    current_day_title = ""
    current_action = ""
    current_reason = ""
    current_faith = []
    
    # State tracking
    processing_day = False
    
    # Pre-compile regex
    re_quarter = re.compile(r'^(## Quarter \d+: .+)')
    re_theme = re.compile(r'^\*\*(Theme: .*)\*\*')
    re_day = re.compile(r'^### Day (\d+): (.+)')
    re_action = re.compile(r'^\*\*Wisdom \(Action\):\*\* (.*)')
    re_reason = re.compile(r'^\*\*Wisdom \(Reason\):\*\* (.*)')
    re_faith_header = re.compile(r'^\*\*Faith \(The Word\):\*\*')

    def save_day():
        nonlocal current_day_num, current_day_title, current_action, current_reason, current_faith
        if current_day_num:
            day_str = f"{int(current_day_num):03d}"
            day_dir_path = os.path.join(OUTPUT_DIR, day_str)
            
            # Ensure directory exists (it should, but safety first)
            os.makedirs(day_dir_path, exist_ok=True)
            
            filename = f"devotionFor{day_str}.md"
            filepath = os.path.join(day_dir_path, filename)
            
            # Clean up faith content (remove empty lines at start/end)
            faith_text = "\n".join(current_faith).strip()
            
            content = f"# Day {current_day_num}: {current_day_title}\n\n"
            content += f"## Quarter Goal\n"
            content += f"{current_quarter}\n"
            content += f"{current_theme}\n\n"
            content += f"### Day Principle (Wisdom(Action))\n"
            content += f"{current_action}\n\n"
            content += f"### Day Reason (Wisdom(Reason))\n"
            content += f"{current_reason}\n\n"
            content += f"### Day Faith (The Word)\n"
            content += f"{faith_text}\n"
            
            with open(filepath, 'w', encoding='utf-8') as out:
                out.write(content)
            print(f"Generated: {filepath}")

    for line in lines:
        line = line.strip()
        if not line:
            # If we are in faith section, we might want to keep newlines, 
            # but usually strip() removes them. Let's use original line for faith content if needed.
            # But here we are just parsing structure.
            # If we are collecting faith lines, we should perhaps append empty lines too?
            # Let's handle collecting lines differently.
            pass

    # Let's iterate with index or just handle raw lines for content
    # Re-reading lines approach for better content capture
    
    # Reset variables for the actual loop
    current_quarter = ""
    current_theme = ""
    current_day_num = None
    
    iterator = iter(lines)
    
    try:
        while True:
            line_raw = next(iterator)
            line = line_raw.strip()
            
            # Check for Quarter
            m_q = re_quarter.match(line)
            if m_q:
                current_quarter = m_q.group(1).replace('## ', '') # Remove markdown header markers if we want clean text, user asked for "## Quarter..." content so maybe keep it?
                # User said: capture ... "## Quarter 1: ..." 
                # Example: "## Quarter 1: Foundations of Character (The Self)"
                # So we keep the raw string but maybe strip newline
                current_quarter = line_raw.strip()
                continue
                
            # Check for Theme
            # The regex for theme expects **Theme: ...**
            # line might be just "**Theme:** Internal Mastery..."
            if line.startswith('**Theme:'):
                current_theme = line_raw.strip().replace('**', '') # User wants to include formatted line? 
                # User example: "**Theme:** Internal Mastery, Discipline, and Identity"
                # Let's keep it as is, or remove bolding if it causes issues. 
                # User request: include that in each daily file updating it when the input file changes
                current_theme = line_raw.strip()
                continue

            # Check for Day
            m_day = re_day.match(line)
            if m_day:
                # Save previous day
                if current_day_num:
                    save_day()
                
                # Start new day
                current_day_num = m_day.group(1)
                current_day_title = m_day.group(2)
                current_action = ""
                current_reason = ""
                current_faith = []
                processing_day = True
                continue
            
            if processing_day:
                # Check for Action
                m_act = re_action.match(line)
                if m_act:
                    current_action = m_act.group(1)
                    continue
                
                # Check for Reason
                m_reason = re_reason.match(line)
                if m_reason:
                    current_reason = m_reason.group(1)
                    continue
                
                # Check for Faith Header
                if re_faith_header.match(line):
                    # Consume lines until next Day or Quarter or End
                    # We are in the loop, so just continue and let the next iterations handle appending
                    # But we need a flag that we are in 'faith' section
                    # Actually, since structure is fixed (Action -> Reason -> Faith -> [Verses]), 
                    # we can assume everything after Faith header until next Day is Faith content.
                    pass
                elif line.startswith('Genesis') or line.startswith('Exodus') or line.startswith('Leviticus') or line.startswith('Numbers') or line.startswith('Deuteronomy') or line.startswith('Joshua') or line.startswith('Judges') or line.startswith('Ruth') or line.startswith('1 Samuel') or line.startswith('2 Samuel') or line.startswith('1 Kings') or line.startswith('2 Kings') or line.startswith('1 Chronicles') or line.startswith('2 Chronicles') or line.startswith('Ezra') or line.startswith('Nehemiah') or line.startswith('Esther') or line.startswith('Job') or line.startswith('Psalms') or line.startswith('Proverbs') or line.startswith('Ecclesiastes') or line.startswith('Song of Solomon') or line.startswith('Isaiah') or line.startswith('Jeremiah') or line.startswith('Lamentations') or line.startswith('Ezekiel') or line.startswith('Daniel') or line.startswith('Hosea') or line.startswith('Joel') or line.startswith('Amos') or line.startswith('Obadiah') or line.startswith('Jonah') or line.startswith('Micah') or line.startswith('Nahum') or line.startswith('Habakkuk') or line.startswith('Zephaniah') or line.startswith('Haggai') or line.startswith('Zechariah') or line.startswith('Malachi') or line.startswith('Matthew') or line.startswith('Mark') or line.startswith('Luke') or line.startswith('John') or line.startswith('Acts') or line.startswith('Romans') or line.startswith('1 Corinthians') or line.startswith('2 Corinthians') or line.startswith('Galatians') or line.startswith('Ephesians') or line.startswith('Philippians') or line.startswith('Colossians') or line.startswith('1 Thessalonians') or line.startswith('2 Thessalonians') or line.startswith('1 Timothy') or line.startswith('2 Timothy') or line.startswith('Titus') or line.startswith('Philemon') or line.startswith('Hebrews') or line.startswith('James') or line.startswith('1 Peter') or line.startswith('2 Peter') or line.startswith('1 John') or line.startswith('2 John') or line.startswith('3 John') or line.startswith('Jude') or line.startswith('Revelation'):
                     # This is a bit brittle, but valid for ASV bible lines usually starting with Bookname
                     current_faith.append(line_raw.strip())
                elif len(line) > 0 and current_day_num and (not current_action or not current_reason):
                     # Could be continuation of action or reason if they span multiple lines?
                     # Based on file sample, they seem single line.
                     pass 
                elif len(line) > 0 and current_day_num:
                    # Likely faith content if not matching other headers
                    # Avoid capturing Quarter/Theme lines here (handled above)
                    # Avoid lines that are just whitespace (handled by len > 0)
                     current_faith.append(line_raw.strip())

    except StopIteration:
        pass
    
    # Save last day
    if current_day_num:
        save_day()

if __name__ == '__main__':
    main()
