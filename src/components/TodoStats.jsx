
const TodoStats = React.memo(({ todos }) => {
    const calculateStats = () => {
        const total = todos.length;
        const completed = todos.filter((todo) => todo.completed).length;
        const active = total - completed;
        const percentCompleted = total === 0 ? 0 : Math.round((completed / total) * 100);
        return { total, completed, active, percentCompleted };
    };

    /**  ------------질문입니다! -------------
     * 컴포넌트를 React.memo로 감싸게 되면
     * `todos`가 달라질 때만 업데이트가 되고
     * `stats`는 `todos`가 바뀔 때마다 다시 값을 구하는 게 맞으니
     * `stats`에는 별도의 메모이징을 하지 않고 컴포넌트에만 메모이징을 하면 되지 않나요?
     * 요구사항에는 `stats`도 메모이징 하라고 하여 질문드립니다!
    */
    const stats = calculateStats()

    return (
        <div className="my-5 p-4 bg-gray-100 rounded">
            <h3 className="mb-2 text-lg font-semibold">통계</h3>
            <div>전체 할 일: {stats.total}개</div>
            <div>완료: {stats.completed}개</div>
            <div>미완료: {stats.active}개</div>
            <div>진행률: {stats.percentCompleted}%</div>
            <div className="mt-2.5 h-2.5 bg-gray-300 rounded">
                <div className="h-full bg-blue-500 rounded" style={{ width: `${stats.percentCompleted}%` }} />
            </div>
        </div>
    );
})

export default TodoStats;
