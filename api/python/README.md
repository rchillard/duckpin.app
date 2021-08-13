# Data
See the top-level [API README](api/../README.md) for an explanation of the data model.

## Object Schema
Each task has the following schema in Python:
```python
{
  "description": {"type": "str"},
  "important": {"type": "bool"},
  "status": {"type": "str", "enum": ["todo", "inprogress", "complete"]},
  "taskid": {"type": "str"},
  "urgent": {"type": "bool"},
  "username": {"type": "str"}
}
```

# Development
## Setup
1. Create a new virtualenv

```bash
python3 -m venv chalice-env
```

2. Activate the virtualenv

```bash
source chalice-env/bin/activate
```

3. Install chalice and other dependencies 

```bash
pip install -r requirements.txt
```

## Testing
All tests assume you have [httpie](https://httpie.io/) installed (```pip install httpie```).  Try the basic API url with:

```bash
http $(chalice url)
```

You can run locally using:

```bash
chalice local
```