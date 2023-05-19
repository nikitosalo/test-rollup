module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    'promise',
    'optimize-regex',
    'sonarjs',
    '@typescript-eslint',
    'babel',
    'import',
    'jsx-a11y',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
  },
  rules: {
    'react/display-name': 'off', // for used Memo
    '@typescript-eslint/unbound-method': 'off',
    'react/prop-types': 'off', // отключаем т.к. у нас ts
    'linebreak-style': 'off', // Неправильно работает в Windows. Это правило обеспечивает для операторов единый стиль переноса строки.
    'arrow-parens': 'off', // Несовместимо с prettier. Это правило требует заключения в круглые скобки параметров стрелочной функции всегда.
    'object-curly-newline': 'off', // Несовместимо с prettier. Это правило обеспечивает согласованный перенос строк внутри фигурных скобок литералов объекта или деструктурирующих назначений
    'no-mixed-operators': 'off', // Несовместимо с prettier. Это правило предупреждает, когда разные операторы используются последовательно без скобок в выражении.
    'arrow-body-style': 'off', // Несовместимо с prettier. Это правило может предписывать или запрещать использование фигурных скобок вокруг тела функции стрелки.
    'function-paren-newline': 'off', // Несовместимо с prettier. Это правило обеспечивает согласованный перенос строк внутри скобок параметров или аргументов функции.
    'no-plusplus': 'off', // Это правило разрешает унарные операторы ++ и --
    'space-before-function-paren': 0, // Несовместимо с prettier. Это правило направлено на обеспечение согласованного интервала перед скобками функций и, как таковое, будет предупреждать всякий раз, когда пробелы не соответствуют указанным предпочтениям.
    'no-console': 'warn', // Это правило запрещает вызовы методов consoleобъекта.
    'no-alert': 'warn', // Это правило направлено на выявление кода отладки, который следует удалить, и всплывающих элементов пользовательского интерфейса, которые следует заменить менее навязчивыми пользовательскими интерфейсами. Таким образом , он будет предупреждать , когда он сталкивается alert, promptи confirmвызовы функций .
    'no-param-reassign': 'error', // Присвоение переменным, объявленным как параметры функции, может вводить в заблуждение и приводить к запутанному поведению, поскольку изменение параметров функции также приведет к изменению argumentsобъекта.
    'no-var': 'error', // Это правило направлено на противодействие использованию varи поощрение использования const или let вместо него.
    radix: 'off', // правило нацеленнное на код совместимый с es5, а у нас es6 поэтому отключаю
    'react/require-default-props': 'off', // Это правило требует заключения в кавычки имен свойств литералов объектов(Отключил)
    //   'prefer-destructuring': 'off', // Это правило требует использования деструктурирования вместо доступа к свойству через выражение члена.(Отключил)
    'react/no-find-dom-node': 'error', // Facebook в конечном итоге прекратит поддержку, findDOMNodeпоскольку он блокирует определенные улучшения в React в будущем.
    'react/no-unused-prop-types': [2], // выдаст ощибку если какой-то props не используется
    'no-empty-function': 'off', // Выключаем т.к используем typescript-eslint
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['arrowFunctions'] },
    ], // Что бы линтер не мешал делать значения по умолчанию для пропсов-функций
    'jsx-a11y/anchor-is-valid': [
      'error',
      { components: ['Link'], specialLink: ['to'] },
    ], // проверка атрибута to у элемента Link
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: 'T',
      },
    ],
    'sonarjs/no-redundant-jump': 'off', //что бы можно было просписывать пустой return
    'sonarjs/cognitive-complexity': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
  },
};
