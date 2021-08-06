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

3. Install chalice using pip

```bash
pip install chalice
```

## Testing
All tests assume you have [httpie](https://httpie.io/) installed.  Try the basic API url with:

```bash
http $(chalice url)
```